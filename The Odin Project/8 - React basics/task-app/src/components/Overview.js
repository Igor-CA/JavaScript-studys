const Task = (props) => {


    let {tasks, event, edit} = props
    return (
        <ul>
            {tasks.map((task) => {
                return(
                <div key={task.id}>
                    <li>{task.number + ' - ' + task.text}</li>
                    <button onClick={ () => {event(task.id)}}>Delete</button>
                    <button onClick={ () => {edit(task.id)}}>Edit</button>
                </div> 
                )
            })}
        </ul>
    )
}

export default Task