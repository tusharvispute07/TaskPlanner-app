import React from "react";
import {useState} from "react"
import { loginUser } from "./userAPIService";
import {useNavigate} from "react-router-dom"
import isAuthenticated from "./auth";
import PageTransition from "./PageTransition";
import Popup from "./app/Popup";

function LoginPage({setUserAuthenticated}) {
  const navigate = useNavigate()
  const [inputValues, setInputValues] =useState({
    username:"",
    password:""
  })
const [isErrorVisible, setIsErrorVisible] = useState(false)
const [errorMessage, setErrorMessage] = useState("")

function handleChange(event){
    const {name, value} = event.target
    setInputValues((prevValues)=>{
      return({
        ...prevValues,
        [name]:value
      })
    })
  }


async function handleClick(event, data){
  event.preventDefault()
  console.log(data)
  await loginUser(data)
  console.log(isAuthenticated())
  if (isAuthenticated()){
    setUserAuthenticated(true)
    navigate('/todo')
  }else {
    setErrorMessage("Invalid Credentials")
    setIsErrorVisible(true)
  }
}

  return (
    <PageTransition>
    <div className="centered-container">
        <form className="form">
          <h1 className="page-title">Login</h1>
          <input type="text" onChange={handleChange} name="username" placeholder="Username" />
          <input type="password" onChange={handleChange} name="password" placeholder="Password" />
          <button id="form-button" onClick={(event)=>handleClick(event, inputValues)}>Log in</button>
          <ul>
            <li><a href="/register">Create an Account</a></li>
            
          </ul>
        </form>
      </div>
      {isErrorVisible && ( 
        <Popup backgroundColor= '#ff0000'
          message={errorMessage}
          onClose={() => {
            setIsErrorVisible(false);
            setErrorMessage("");
          }}
        />
      )}
      </PageTransition>
  );
}

export default LoginPage; 




