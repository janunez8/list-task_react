import './App.css';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Posts from './components/Posts'

//Import react router(enrutador para navegar en diferentes pags)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//Import Data (.json)
import tasks from './sample/tasks.json';


//Import Components
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

class App extends Component{
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    //alterar el estado de las tareas que ya teniamos
    this.setState({
      tasks: [...this.state.tasks, newTask]//Se añade new task al state
    })
  }

  deleteTask = (id) => {
    const listTasks = this.state.tasks.filter(task => (task.id !== id));
    this.setState({
      tasks: listTasks
    });
  }

  checkTask = (id) => {
    const newtasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    });
    this.setState({
      tasks: newtasks
    });
  }

  render(){
    return(
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>

          <Routes>
            <Route exact path="/" element={<div>
                  <TaskForm addTask={this.addTask}/>
                  <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkTask={this.checkTask}/> 
                </div>}>
            </Route>
            <Route path="/posts" element={<Posts/>}>
                
            </Route> 
          </Routes>
        </Router>

        
      
        
         
      </div>
    )
  }
}
    

export default App;
