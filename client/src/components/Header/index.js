import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import "./header.css"


// function test(){
//   console.log("Test!")
// }

const Header = () => {
  function test(){
    console.log("Test!")
  }
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header>
      <div className="header-container">
        <div className="brand-logo" onClick={test}>
          <h1 onClick={()=>console.log("working")}>Git<span className="orange-red">Fit</span></h1>
        </div>
        <nav>

          <a href="/">Home</a>
          <a href="/Workouts">Workout</a>
          
        </nav>
        <div className="button-container">
        {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="sign-up-btn m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="log-in-btn m-2" to="/login">
                Login
              </Link>
              <Link className="sign-up-btn m-2" to="/register">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;