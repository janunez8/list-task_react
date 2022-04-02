import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Import components
import Task from './Task';

class Tasks extends Component{
    render(){
        
        return(
            this.props.tasks.map(task => <Task 
                task={task}
                key={task.id} 
                deleteTask={this.props.deleteTask}
                checkTask ={this.props.checkTask}/>)
        )
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;