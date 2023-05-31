import React, { Component } from "react";
import Task from "./components/Overview";
import uniqid from "uniqid";


class App extends Component {

  constructor(){
    super()

    this.state = {
      tasks:[],
      task:{ 
        text:'',
        number: 1,
        id: uniqid()
      },
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
  }

  deleteTask(id){
    let taskNumber
    
    
    this.setState({
      number: this.state.number - 1,
      tasks: this.state.tasks.map((task, coord) => {
        if(task.id === id )
          taskNumber = coord
        if(coord > taskNumber)
          task.number -= 1
        return task
      }).filter(task => task.id !== id)
    })
  }

  handleEdit(id){
    console.log(id)
    this.setState({
      task:{
        text: this.state.tasks.filter(task => task.id === id).map(task => task.text)[0],
        number: this.state.tasks.filter(task => task.id === id).map(task => task.number)[0],
        id: this.state.tasks.filter(task => task.id === id).map(task => task.id)[0]
      },
      editing: this.state.tasks.filter(task => task.id === id).map(task => task.number)[0],
    })
  }
  edit(e){
    e.preventDefault()
    let editedTask = this.state.task
    let newTasks = this.state.tasks.map(task => {
      if(task.number === this.state.editing){
        task.text = editedTask.text
        return task         
      }
      else  
        return task
    })
    console.log(editedTask)
    console.log(newTasks)
    console.log(this.state.tasks)
    this.setState({
      tasks: newTasks,
      task: {
        text: e.target.value,
        number: (this.state.tasks.length + 2),
        id: uniqid()
      },
      editing: false
    })
  }

  handleTextInput(e){
    this.setState({
      task:{
        text: e.target.value,
        number: (this.state.tasks.length + 1),
        id: this.state.task.id
      }
    })         
  }

  handleAddButton(e){
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: e.target.value,
        number: (this.state.tasks.length + 2),
        id: uniqid()
      }
    })
  }


  render(){
    const {task, tasks} = this.state
    return (
      <div>
        <form>
          <label htmlFor="TextInput">Task name:</label>
          <input 
            type="text" 
            id="TextInput"
            value={task.text} 
            onChange={this.handleTextInput} >
          </input>
          {(this.state.editing === false)?
            <button onClick={this.handleAddButton}>Add task</button>:    
            <button onClick={this.edit}>Edit task {this.state.editing}</button>    
          }
        </form>
        <Task tasks={tasks} event={this.deleteTask} edit={this.handleEdit}/>   
      </div>
    );    
  }

}

export default App;
