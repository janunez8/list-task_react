import React, {Component} from 'react';

class TaskForm extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Write here" />
                <br></br>
                <textarea placeholder='Write a description'></textarea>
            </form>
        )
    }
}

export default TaskForm;