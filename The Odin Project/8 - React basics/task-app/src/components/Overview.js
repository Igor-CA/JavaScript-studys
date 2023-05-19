const Task = (props) => {


    let {tasks, event} = props
    return (
        <ul>
            {tasks.map((task) => {
                return(
                <div key={task.id}>
                    <li>{task.number + ' - ' + task.text}</li>
                    <button onClick={ () => {event(task.id)}}>Delete</button>
                </div> 
                )
            })}
        </ul>
    )
}

export default Task