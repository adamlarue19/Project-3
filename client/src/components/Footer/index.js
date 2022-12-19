import React from 'react';

import "./footer.css"


const Footer = () => {
    // We retrieve the current `location` object data from React Router

    // We get React Router's navigate object so we can access and adjust browser history
    function test(){
      console.log("Test!")
    }
    return (
      <footer className="w-100 mt-auto text-light p-4">
        <div className="container text-center mb-5">
        <div className="brand-logo" onClick={test}>
          <h1 onClick={()=>console.log("working")}>Git<span className="orange-red">Fit</span></h1>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  