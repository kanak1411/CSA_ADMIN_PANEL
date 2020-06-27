import React from 'react';
import data from '../api';
import {Link} from 'react-router-dom'; 
class MainScreen extends React.Component{
    state={data:[]};
    componentDidMount(){
        setTimeout(() => {
            data.get('/').then(res=>{
                this.setState({data:res.data});
                });    
        }, 2000);
        }
        onChange=()=>{
            data.get('/').then(res=>{
                this.setState({data:res.data});
                });
        }
        ondelete=(id)=>{
        data.delete(`/${id}`).then(()=>{this.onChange()})          
        }
        renderList(){
            return this.state.data.map((dat,index)=>{
                return <div key={dat.id} className="ui segment">
                    <div className="ui grid">
                    <div className="one wide column">
                    {++index}
                    </div>
                    <div className="eight wide column">
                        {dat.body}
                    </div>
                    <div className="three wide column">{dat.title}</div>
                    <div className="four wide column">
                        <Link to={`/edit/${dat.id}`} className="ui primary button">Edit</Link>
                        <button onClick={()=>this.ondelete(dat.id)}
                        className="ui button">Delete</button>
                    </div>
                    </div>
                    </div>
            });
        }
    render(){
        
        return (
            <div>
        <div>
        {this.renderList()}
            </div>
            <div>
                <Link to="/create" className="ui primary button">Create</Link>
            </div>
            </div>
            );
    }
}
export default MainScreen;