import React from "react";
import Search from "../components/Search"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

import "./Home.css";
import image from "../images/main-image.png";

const Home = () => {
  return (
    <div className="space">
      <section className="hero-section">
        <div className="hero-container">
          <div className="text-container">
        
            <p>Train Smarter. Get Stronger.</p>
            <h1>ACHIEVE YOUR FITNESS GOALS TODAY</h1>
            <p>
              Want to be healthier? Join the program and receive workout plans
              that best match your fitness goals.
            </p>
            <Link className="startNowBtn" to="/register">
                Start Now
              </Link>
          </div>
          <div className="image-container">
            {/* Imported image */}
            <img src={image}></img>
          </div>
        </div>

      </section>
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
