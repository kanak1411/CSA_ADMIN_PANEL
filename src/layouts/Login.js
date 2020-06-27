import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
// Material UI elements
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CampusPic from '../assets/img/campus.jpg';
import history from '../history';
import LoginWithGoogle from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '-10',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [email, setEmail] = useState('');

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);

    LoginWithGoogle.get('/', {
      data: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 200) {
          history.push('/admin/dashboard');
        } else {
          history.push('/login');
        }
      })
      .catch((res) => console.log(res));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <img src={CampusPic} alt={CampusPic} className="ui fluid image" />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <Box pt={4}>
              <GoogleLogin
                clientId="604242605681-v60kba2hglvtnspec2mtbacta51r64mp.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </Box>
            <Box pt={30}>
              <Typography variant="body1" color="textSecondary" align="center">
                Made with <i className="heart icon ui red" color="red" />
                by{' '}
                <Link
                  color="inherit"
                  href="https://devsoc.club"
                  target="_blank"
                >
                  DevSoc;
                </Link>
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
