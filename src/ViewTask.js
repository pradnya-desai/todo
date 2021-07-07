import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Select from 'react-select';
import TodoServices from './TodoServices';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },    
//      { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//    ];

   

function ViewTask(props){
    
const viewTask={
    task_list:[]
}

const [selectedOption, setSelectedOption] = useState(null);
const [view,setView]=useState(viewTask);
const [user,setUser]=useState('pradnya')
const [options,setOptions]=useState([])

useEffect(()=>{
    document.title='welcome ${user}'
    TodoServices.getTasks().then((res)=>{
        if(res.status==200){
            setView({task_list:res.data})
        }
    })
},[user])

const DeleteTask=(taskId)=>{
    TodoServices.deleteTask(taskId).then(res=>{
        alert("task deleted")
        setView({task_list:view.task_list.filter(task=>task.taskId!==taskId)})
    })
}
 const handleInputChange=(searchString)=>{
    console.log(searchString);
     TodoServices.searchTask(searchString).then((res)=>{
         setOptions(res.data)
         console.log(options);
     }
     )
 }
 const updateTask=(taskId)=>{
     props.history.push(`/UpdateTask/${taskId}`)
 }
    return(
        <div>
            <div class="container">
            <i class="fas fa-user-tie fa-6x" style={{float:"left",marginTop:"-70px"}}></i>
            <h3 style={{float:"right"}}>Welcome {user}!</h3>
    <Link to="/AddTask"><button style={{fontSize:"15px", marginTop:"100px", width:"100%"}}>Add New Task</button></Link>
</div>
<Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                onInputChange={handleInputChange}
          
            />

<div className="task-table container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th width="200px">Task Id</th>
                            <th width="500px">Tasks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.task_list.map(
                                (task)=>
                                <tr key={task.id}>
                                    <td>{task.taskId}</td>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <button onClick={ ()=>updateTask(task.taskId)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"30px"}} onClick={ ()=> DeleteTask(task.taskId)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> 




            </div>
    )
}
export default ViewTask