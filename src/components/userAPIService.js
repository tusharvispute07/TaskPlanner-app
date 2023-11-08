import axios from 'axios'

export async function registerUser(data){
    try{
        const response = await axios.post("https://taskplanner-makp.onrender.com/api/register",data)
        return response
    }catch(error){
        console.log("Error registering user", error)
    }
}

export async function checkUserExistence(username) {
    try {
      const response = await axios.get(`https://taskplanner-makp.onrender.com/api/userExists/${username}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false; 
    }
  }

  export async function loginUser(data) {
    console.log("reached loginUser");
    try {
        const response = await axios.post("https://taskplanner-makp.onrender.com/api/login", data);
        const { token } = response.data;
        localStorage.setItem('authToken', token)
        return response;
    } catch (error) {
        console.error("Error signing up", error)
        throw error
    }
}
