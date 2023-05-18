import { Component } from "react";

class Task extends Component{
    render(){
        return (
            <ul>
                {this.props.tasks.map((task) => {
                    return <li>{task.text}</li>
                })}
            </ul>
        )
    }
}

export default Task