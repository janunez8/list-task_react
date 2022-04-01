import './App.css';
import { render } from '@testing-library/react';
import React, {Component} from 'react';

//Import Data (.json)
import tasks from './sample/tasks.json'
//console.log(tasks);

//Import Components
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

class App extends Component{
  state = {
    tasks: tasks
  }
  render(){
    return(
      <div>
        <Tasks tasks={this.state.tasks}/> 
        <TaskForm/>
      </div>
    )
  }
}
    

export default App;
