import axios from 'axios'

export async function fetchTodoList(){
    try{
        const response = await axios.get('https://taskplanner-makp.onrender.com/api',{
            withCredentials:true,
            credentials: 'include'
        })
        return response.data
    }catch(error){
        console.log("Error Fetching data", error)
    }
}

export async function addToDoItem(data){
    try{
        await axios.post('https://taskplanner-makp.onrender.com/api/add', data, {withCredentials: true})
    }catch(error){
        console.log("Error adding item", error)
    }
}

export async function deleteToDoItem(id){
    try{
        await axios.delete(`https://taskplanner-makp.onrender.com/api/delete/${id}`, {withCredentials: true})
    }catch(error){
        console.log("Error deleting item", error)
    }
}