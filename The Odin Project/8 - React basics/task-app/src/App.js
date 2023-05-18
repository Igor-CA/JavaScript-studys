import React, { Component } from "react";
import Task from "./components/Overview";

class App extends Component {

  constructor(){
    super()

    this.state = {
      task:{ textInput:'' },
      tasks:[]
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
  }

  handleTextInput(e){
    this.setState({
      task:{
        text: e.target.value,
      }
    })    
  }

  handleAddButton(e){
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: e.target.value,
      }
    })
  }


  render(){
    return (
      <div>
        <form>
          <label htmlFor="TextInput">Task name:</label>
          <input type="text" id="TextInput" onChange={this.handleTextInput}></input>
          <button onClick={this.handleAddButton}>Add task</button>       
        </form>
        <Task tasks={this.state.tasks}/>   
      </div>
    );    
  }

}

export default App;
