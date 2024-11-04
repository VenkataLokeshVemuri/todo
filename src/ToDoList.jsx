import React,{ useState } from "react";

function ToDoList(){
    const [task,setTask]=useState([]);
    const [newtask,setNewTask]=useState("");
    function handleinputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newtask.trim()!==""){
        setTask(task => [...task,newtask])
        setNewTask("")
        }
    }
    function addTaskClear(){
        setNewTask("");
    }
    function deleteTask(index){
        const updatedTasks=task.filter((ele,i)=> i!==index)
        setTask(updatedTasks)
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    
    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    return(
            <><h1 className="Title">To-Do-List</h1>
        <div className="todolist">
            <div className="tasks">
            <div className="inputTask">
                <input
                type="text"
                placeholder="Enter the task..."
                value={newtask}
                onChange={handleinputChange}
                />
                <button className="inputButtonAdd" onClick={addTask}>Add</button>
                <button className="inputButtonClear" onClick={addTaskClear}>Clear</button>
            </div>
            <ol>
                {task.map((task,index)=>
                <li key={index}>
                    <div className="taskitem">
                    <span className="text">{task}</span>
                    <div className="taskbuttons">
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </div>
                    </div>
                    </li>)}
            </ol>
            </div>
        </div>
        </>
    )
}
export default ToDoList;