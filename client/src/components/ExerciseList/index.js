import React from 'react';


const ExerciseList = ({ exercises, title }) => {
    if (!exercises.length) {
      return <h3>No exercises Yet</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {exercises &&
          exercises.map((exercises) => (
            <div key={exercises._id} className="card mb-3">
              <div className="card-body bg-light p-2">
                <p className='workoutTitle'>{exercises.name}</p>
                <p className='workoutTitle'>{exercises.weight}</p>
                <p className='workoutTitle'>{exercises.reps}</p>
                <p className='workoutTitle'>{exercises.sets}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default ExerciseList;