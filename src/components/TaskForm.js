import React, {Component} from 'react';
 


class TaskForm extends Component{
    state = {
        title: '',
        description : ''
    }


    onSubmitData = e => {
        //console.log(this.state)
        this.props.addTask(this.state.title, this.state.description);
        //No refresca nav
        e.preventDefault();
    }

    onChangeData = e => {
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmitData}>
                <input type="text" name="title" placeholder="Write here" onChange={(e)=>this.onChangeData(e)} values={this.state.title}/>
                <br/>
                <br/>
                <textarea placeholder='Write a description' name="description" onChange={(e)=>this.onChangeData(e)} values={this.state.description}></textarea>
                <button type='submit'>
                    Submit
                </button>
            </form>
        )
    }
}

export default TaskForm;