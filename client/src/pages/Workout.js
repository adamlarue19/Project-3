import React from "react";
import SearchForm from "./Test";
import "./Workout.css";
import Carousel from "../components/Excersise/index"
import Workouts from "../components/Workouts/index"

import "bootstrap/dist/css/bootstrap.min.css";

const Workout = () => {

  return (
    <body className="body">
      <section className="main-Container">
        <div className="excercise-Container">
          <div className="excerciseTitle">
            <h2>Excercises</h2>
          </div>
          <p className="pGitFit">Favorite your excercises</p>
		  <Carousel />
        </div>
      </section>
      <section className="main-Container">
        <div className="workoutContainer">
          <Workouts />
          <div className="searchTitle">Workouts</div>
          <div className="searchInfo">
            <div className="information">Create your own workouts</div>
            <div className="video">Youtube video</div>
          </div>
        </div>
      </section>
      <h1>Enter the muscle you wanna work man</h1>
      <SearchForm />
    </body>
  );
};

export default Workout;
