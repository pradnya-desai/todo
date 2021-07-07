import TodoServices from "./TodoServices"
import {useEffect,useState} from 'react'
function UpdateTask(props){

const updateTaskObj={
    taskId:props.match.params.taskId,
    taskName:''
}
 const [update,setUpdate]=useState(updateTaskObj)

 useEffect(()=>{
     const taskId=props.match.params.taskId
     TodoServices.getTaskById(taskId).then((res)=>{
         let task_list=res.data;
         setUpdate({taskName:task_list.taskName})
     })
 },[])

 const changeTaskNameHandle=(event)=>{
     setUpdate({...update,[event.target.name]:event.target.value})
 }

 const updateT=(event)=>{
     const taskId=props.match.params.taskId
     event.preventDefault();
     let task_list={
         taskName:update.taskName
        }
     console.log('task_list=>'+JSON.stringify(task_list));
     TodoServices.updateTask(task_list,taskId).then(res=>{
         alert("Task Updated")
         props.history.push('/ViewTask')
     })
 }
    return(
        <div>
            <div class="container">
    <label for="tname"><b>Enter Task to Update</b></label>
    <input type="text" placeholder="Enter Task Name to Update" name="taskName" value={update.taskName} onChange={changeTaskNameHandle} required/>
    <button type="button" onClick={updateT} value="Update" style={{fontSize:"15px", backgroundColor:"red"}}>UpdateTask</button>
</div>
            </div>
    )
}
export default UpdateTask