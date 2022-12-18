import React from 'react';

import "./footer.css"


const Footer = () => {
    // We retrieve the current `location` object data from React Router

    // We get React Router's navigate object so we can access and adjust browser history

    return (
      <footer className="w-100 mt-auto text-light p-4">
        <div className="container text-center mb-5">
          <h1>Find all of our GitHub profiles with this link!</h1>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  