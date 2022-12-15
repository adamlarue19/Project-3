import React from 'react';

import "./Home.css"
import image from "../images/main-image.png"

const Home = () => {
  return (
    <div>
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='text-container'>
          <p>test</p>
          <p>Train Smarter. Get Stronger.</p>
          <h1>ACHIEVE YOUR FITNESS GOALS TODAY</h1>
          <p>Want to be healthier? Join the program and receive workout
            plans that best match your fitness goals.
          </p>
          <button>Start Now</button>
        </div>
        <div className='image-container'>
          {/* Imported image */}
          <img src={image}></img>

        </div>

        {/* <Search /> */}
      </div>
    </section>
    <section></section>
    </div>
  )
}


export default Home;