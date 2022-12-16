import React from "react";

import "./Home.css";
import image from "../images/main-image.png";

const Home = () => {
  return (
    <body>
    <div className="space">
      <section className="hero-section">
        <div className="hero-container">
          <div className="text-container">
            <p>test</p>
            <p>Train Smarter. Get Stronger.</p>
            <h1>ACHIEVE YOUR FITNESS GOALS TODAY</h1>
            <p>
              Want to be healthier? Join the program and receive workout plans
              that best match your fitness goals.
            </p>
            <button>
              <a href="/register">Start Now</a>
            </button>
          </div>
          <div className="image-container">
            {/* Imported image */}
            <img src={image}></img>
          </div>

          {/* <Search /> */}
        </div>
      </section>
      <section className="main-Container">
        <div className="about-Container">
          <div className="headingGitFit">
            <h2>About Git-Fit</h2>
          </div>
          <p className="pGitFit">This is the about Git-Fit section</p>
        </div>
      </section>
      <section className="main-Container">
        <div className="searchContainer">
          <div className="searchTitle">Search for an excersise</div>
          <input
            className="searchBar"
            type="text"
            placeholder="🔎Search here"
            // onChange={handleChange}
            // value={search}
          />
          <div className="searchInfo">
            <div className="information">
              This is going to be where the information displays
            </div>
            <div className="video">Youtube video</div>
          </div>
        </div>
      </section>
      <section className="main-Container">
        <div className="bmiExample">
          <div className="bmiImage">Image here</div>
          <div className="bmiText">This is the text for the bmi image</div>
        </div>
      </section>
    </div>
    </body>
  );
};

export default Home;
