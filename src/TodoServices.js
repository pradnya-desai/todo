import http from './http-common'
const addUser=(register)=>{
    return http.post("/register",register)
} 
const checkLogin=(login)=>{
    return http.post("/login",login)
}
 const createNewTask=(taskList)=>{
     return http.post("/savetask",taskList)
 }
 const getTasks=()=>{
     return http.get("/displaytask")
 }
 const deleteTask=(taskId)=>{
     return http.delete("/deletetask"+'/' +taskId)
 }

 const getTaskById=(taskId)=>{
     return http.get("/taskbyid"+ '/'+taskId)
 }
 
const updateTask=(taskList,taskId)=>{
    return http.put("/updatetask" + '/' +taskId,taskList)
}
const searchTask=(taskName)=>{
    return http.get("/searchtask"+ '/' +taskName)
}
const setNewPassword=(email,password)=>{
    return http.put("/updatepassword"+'/'+email,password)

}
export default {addUser,checkLogin,createNewTask,getTasks,deleteTask,updateTask,getTaskById,searchTask,setNewPassword}