import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title }) => {
    if (!workouts.length) {
      return <h3>No workouts Yet</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {workouts &&
          workouts.map((workouts) => (
            <div key={workouts._id} className="card mb-3">
              <div className="card-body bg-light p-2">
                <p>{workouts.name}</p>
              </div>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/workouts/${workouts._id}`}
              >
                Join the discussion on this workouts.
              </Link>
            </div>
          ))}
      </div>
    );
  };
  
  export default WorkoutList;