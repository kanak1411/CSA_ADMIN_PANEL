import React from 'react';
import data from '../api';
import history from '../history';

class EditForm extends React.Component{
    state={author:[],body:[]};
    componentDidMount(){
        this.getDetails()
    }
    getDetails(){
        let idn=this.props.match.params.id;
        data.get(`/${idn}`).then(res=>{this.setState({
            author:res.data.title,
            body:res.data.body
        })
    });
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        data.patch(`/${this.props.match.params.id}`,{title:this.state.author,description:this.state.description});
        history.push('/admin/table');
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Event Author</label>
                        <input type="text"
                        value={this.state.author}
                        onChange={(event)=>this.setState({author:event.target.value})}
                        placeholder="Author"/>
                        </div>
                        <div className="field">
                        <label>Event Description</label>
                        <input type="text" 
                        value={this.state.body}
                        onChange={(event)=>this.setState({body:event.target.value})}
                        placeholder="Description"/>
                        </div>
                        <button className="ui primary button">Submit</button>
                </form>
            </div>
        );
    }
}
export default EditForm;