import React, {Component} from 'react';
//import PropTypes from 'prop-types';

//Import components
import Task from './Task';

class Tasks extends Component{
    render(){
        
        return(
            this.props.tasks.map(task => <Task task={task} key={task.id}/>)
        )
    }
}

export default Tasks;