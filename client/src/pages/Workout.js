import React from "react";
import SearchForm from "./Test";
import "./Workout.css";
import { useQuery } from '@apollo/client';
import ExerciseForm from "../components/ExcersiseForm/index"
import WorkoutForm from "../components/WorkoutForm/index"
import WorkoutList from "../components/WorkoutList/index"
import { QUERY_WORKOUTS } from "../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer"


const Workout = () => {
  const { data } = useQuery(QUERY_WORKOUTS);
  const workouts = data?.workouts || [];

  return (
    <div className="body">
      <section className="main-Container">
        <div className="excercise-Container">
          <div className="excerciseTitle">
            <h2>Add Workout</h2>
          </div>
          <WorkoutForm />
        </div>
      </section>
      <section className="main-Container">
        <div className="workoutContainer">
          <WorkoutList 
          workouts={workouts}
          title="test"
          />
          <div className="searchTitle">Workouts</div>
          <div className="searchInfo">
            <div className="information">Create your own workouts</div>
          </div>
        </div>
      </section>
      <Footer />  
    </div>
  );

};

export default Workout;
