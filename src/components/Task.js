import React, {Component} from 'react';
import PropTypes from 'prop-types';



 class Task extends Component{
    render(){
        const {task} = this.props;
        return(
            <div style={this.StyleCompleted()}>
                {task.title} 
                {task.description} 
                {task.done} 
                {task.id}
                <input type="checkbox" onChange={this.props.checkTask.bind(this, task.id)}/>
                <button style={btnDelete}  onClick={this.props.deleteTask.bind(this, task.id)}>Delete</button>
            </div>
        )
    }
    //Estilos a partir de una funcion (Me permite realizar operaciones logicas)
    StyleCompleted(){
        const {task} = this.props;
        return{
            fontSize: "20px",
            color: task.done ? "gray" : "black",
            textDecoration: task.done ? "line-through" : "none"
        }
    }
 }

 //Especifico que solo admite un object task
 Task.propTypes = {
    task: PropTypes.object.isRequired
}

 //Estilos en linea a partir de una variable constante
 const btnDelete = {
     fontSize: "15px",
     background: "#791500",
     color: "#fff",
     border: "none",
     padding: "0px 15px",
     borderRadius: "10%",
     borderColor: "black",
     cursor: "pointer"
 }

 export default Task;