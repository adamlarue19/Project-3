import React from "react";

import "./header.css"

import { Link } from "react-router-dom";


// function test(){
//   console.log("Test!")
// }

const Header = () => {
  function test(){
    console.log("Test!")
  }
  return (

    <header>
      <div className="header-container">
        <div className="brand-logo" onClick={test}>
          <h1 onClick={()=>console.log("working")}>Git<span className="orange-red">Fit</span></h1>
          <h1 onClick={()=>console.log("working")}>asdadasdsa</h1>
        </div>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Program</a>
          <a>Newsletter</a>
        </nav>
        <div className="button-container">
          <a href="/Login" className="log-in-btn">Log in</a>
          <button className="sign-up-btn">Register</button>
          <p id="menu">&#9776;</p>
        </div>
      </div>
    </header>
  )
}

export default Header;