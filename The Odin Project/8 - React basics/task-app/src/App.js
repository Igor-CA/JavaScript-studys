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
      }
    }
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
          <button onClick={this.handleAddButton}>Add task</button>       
        </form>
        <Task tasks={tasks} event={this.deleteTask}/>   
      </div>
    );    
  }

}

export default App;
