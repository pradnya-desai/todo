import {useState} from 'react'
import TodoServices from './TodoServices'
function AddTask(props){
    const addTask={
        taskName:''
    }
     const [addNewTask,setAdd]=useState(addTask);
     const addTaskNameHandle=(event)=>{
         setAdd({...addNewTask,[event.target.name]:event.target.value})
     }
     const AddNewTask=(e)=>{
         e.preventDefault();
         let task_list={taskName: addNewTask.taskName}
         console.log('task_list => '+JSON.stringify(task_list));
         TodoServices.createNewTask(task_list).then(res=>{
             if(res.status=200){
                 alert("task added succesfully")
    props.history.push('/ViewTask')
}
         }
    )
     }
    return(
        <div>
            <div class="container">
    <label for="tname"><b>Enter Task</b></label>
    <input type="text" placeholder="Enter Task Name" value={addNewTask.taskName} onChange={addTaskNameHandle} name="taskName" required/>
    <button type="button" onClick={AddNewTask} style={{fontSize:"15px"}}>Add Task</button>
</div>
            </div>
    )
}
export default AddTask