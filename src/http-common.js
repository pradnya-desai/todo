import axios from 'axios'
export default axios.create({
    baseURL:"http://localhost:8282/ToDo",
    headers:{
    "Content-type":"application/json"
    }
    })