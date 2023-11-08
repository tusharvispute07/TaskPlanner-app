import axios from 'axios'

const getAuthToken = () => {
    return localStorage.getItem('authToken')
}

export async function fetchTodoList(){
    try{
        const authToken = getAuthToken()
        const response = await axios.get('https://taskplanner-makp.onrender.com/api',
        {
         headers: {
            Authorization: `Bearer ${authToken}`
         }
        })
        return response.data
    }catch(error){
        console.log("Error Fetching data", error)
    }
}

export async function addToDoItem(data){
    try{
        const authToken = getAuthToken()
        await axios.post('https://taskplanner-makp.onrender.com/api/add', data, {
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
    }catch(error){
        console.log("Error adding item", error)
    }
}

export async function deleteToDoItem(id){
    try{
        const authToken = getAuthToken()
        await axios.delete(`https://taskplanner-makp.onrender.com/api/delete/${id}`, {
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
    }catch(error){
        console.log("Error deleting item", error)
    }
}