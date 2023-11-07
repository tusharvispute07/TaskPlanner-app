import React, {useState, useEffect} from "react";
import {registerUser, checkUserExistence} from "./userAPIService"
import { Link } from "react-router-dom";
import PageTransition from "./PageTransition";
import Popup from "./app/Popup";



export default function RegisterPage(){
  const emptyInputObj = {
    fname:"",
    lname:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }
 
  const [inputValues, setInputValues] = useState(emptyInputObj)
  const [passwordsMatch, setPasswordMatch] = useState(true)
  const [isRegistered, setRegistered] = useState(false)
  const [isUserRegistered, setUserRegistered] = useState(false)
  const [registeredMessage, setRegisteredMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordsMatch: ""
  })
  
  function handleChange(event){
    const {name, value} = event.target
    setInputValues(prevValues=>{
      return {
        ...prevValues,
        [name]: value
      }
    })
  }


  useEffect(()=>{
    if(inputValues.confirmPassword){
      if(inputValues.password === inputValues.confirmPassword) setPasswordMatch(true)
      else setPasswordMatch(false)
    }
    

  }, [inputValues.confirmPassword, inputValues.password])

  async function handleClick(data, event){
    event.preventDefault()
    let hasErrors = false
    if (!inputValues.fname) {
      setErrorMessage((pvals)=>({ ...pvals, fname: "First Name is required" }));
      hasErrors = true;
    }
    if (!inputValues.username) {
      setErrorMessage((pvals)=>({ ...pvals, username: "Username is required" }));
      hasErrors = true;
    }
    if (!inputValues.email) {
      setErrorMessage((pvals)=>({ ...pvals, email: "E-mail is required" }));
      hasErrors = true;
    }
    if (!inputValues.password) {
      setErrorMessage((pvals)=>({ ...pvals, password: "Please set a password" }));
      hasErrors = true;
    }else if (inputValues.password.length < 8){
      setErrorMessage((pvals) =>({...pvals, password: "Password must have atleast 8 characters"}))
    }
    if (!inputValues.confirmPassword) {
      setErrorMessage((pvals)=>({ ...pvals, confirmPassword: "Please confirm your password" }));
      hasErrors = true;
    }
  
  
    if (hasErrors) return
    try{
      const response = await checkUserExistence(inputValues.username)
      if (response){
        setErrorMessage((pvals)=>({ ...pvals, username: "username already exists" }))
        return
      }else{
        const response = await registerUser(data)
        console.log(response)
        setRegisteredMessage("Successfully Registered!")
        setRegistered(true)
        setUserRegistered(true)
        setInputValues(emptyInputObj)

      } 
    }catch(error){
      console.log("Error registering user", error)
    }
  }
 

    return(
      <PageTransition>
      <div className="centered-container">
        <form className="form">
          <h1 className="page-title">Register</h1>
          {errorMessage.fname && <p className="reg-error">{errorMessage.fname}</p>}
          <input type="text" onChange={handleChange} placeholder="First Name" name="fname" value={inputValues.fname} onFocus={() => setErrorMessage({ ...errorMessage, fname: "" })}/>

          <input type="text" onChange={handleChange} placeholder="last Name" name="lname" value={inputValues.lname} />
          {errorMessage.username && <p className="reg-error" >{errorMessage.username}</p>}
          <input type="text" onChange={handleChange} placeholder="Create a username" name="username" value={inputValues.username} onFocus={() => setErrorMessage({ ...errorMessage, username: "" })}/>
          
          {errorMessage.email && <p className="reg-error" >{errorMessage.email}</p>}
          <input type="e-mail" onChange={handleChange} placeholder="E-mail" name="email" value={inputValues.email} onFocus={() => setErrorMessage({ ...errorMessage, email: "" })}/>
          
          {errorMessage.password && <p className="reg-error" >{errorMessage.password}</p>}
          <input type="password" onChange={handleChange} placeholder="Create Password" name="password"  value={inputValues.password} onFocus={() => setErrorMessage({ ...errorMessage, password: "" })}/>
          
          {errorMessage.confirmPassword && <p className="reg-error" >{errorMessage.confirmPassword} </p>}
          <input type="password" onChange={handleChange} placeholder="Confirm Password" name="confirmPassword" value={inputValues.confirmPassword} onFocus={() => setErrorMessage({ ...errorMessage, confirmPassword: "" })}/>
          

          {!passwordsMatch && (<p className="reg-error" >Passwords do not match</p>)}
          <button type="submit" onClick={(event)=>handleClick(inputValues, event)}  id="form-button" disabled={!passwordsMatch}>Sign up</button>
          <ul>
          {isUserRegistered && (
        <div >
          Registration was successful! You can now proceed to <Link to= "/login">Login</Link>.
        </div>
      )}
          </ul>
        </form>
        </div>
        {isRegistered && <Popup backgroundColor="#32CD32"
        message={registeredMessage}
        onClose={()=>{
          setRegistered(false)
          setRegisteredMessage("")
        }} />}
        </PageTransition>
    )
}