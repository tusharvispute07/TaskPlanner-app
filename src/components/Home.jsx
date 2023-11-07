import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "./PageTransition";

export default function Home(){
    return(
      <PageTransition>
     <div className="centered-container">
      <div className="centered-home">
      <div className="home-screen">
        <p className="greeting">Bonjour!</p>
        <p className="sub-greeting" >Stay organized. Get things done.</p>
      </div> 
      <div className="home-buttons">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button id="home-button">Sign In</button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button id="home-button">Sign Up</button>
          </Link>
      </div>
      </div>
    </div>  
    </PageTransition>
    )
}