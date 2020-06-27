import React from 'react';
import data from '../api';
import history from '../history';

class CreateForm extends React.Component{
    state={author:[],body:[]};
    onFormSubmit=(event)=>{
        event.preventDefault();
        data.post('/',{title:this.state.author,body:this.state.body}); 
        history.push('/admin/table');
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Event Author</label>
                        <input type="text"
                        onChange={(event)=>this.setState({author:event.target.value})}
                        placeholder="Author"/>
                        </div>
                        <div className="field">
                        <label>Event Description</label>
                        <input type="text" 
                        onChange={(event)=>this.setState({body:event.target.value})}
                        placeholder="Description"/>
                        </div>
                        <button className="ui primary button">Submit</button>
                </form>
            </div>
        );
    }
}
export default CreateForm;