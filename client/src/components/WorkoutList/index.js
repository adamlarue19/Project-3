import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title }) => {
    if (!workouts.length) {
      return <h3>No workouts Yet</h3>;
    }
  
    return (
      <div className='card-layout'>
        <h3>{title}</h3>
        {workouts &&
          workouts.map((workouts) => (
            <div key={workouts._id} className="card-style mb-3">
              <div className="card-body-style p-2">
                <p className='workoutTitle'>{workouts.name}</p>
              </div>
              <Link
                className="seeWorkout-btn"
                to={`/workouts/${workouts._id}`}
              >
                See Your Workout
              </Link>
            </div>
          ))}
      </div>
    );
  };
  
  export default WorkoutList;