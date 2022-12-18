import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title }) => {
    if (!workouts.length) {
      return <h3>No workoutss Yet</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {workouts &&
          workouts.map((workouts) => (
            <div key={workouts._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {workouts.name} <br />
                <span style={{ fontSize: '1rem' }}>
                  had this workouts on {workouts.createdAt}
                </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{workouts.workoutsText}</p>
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