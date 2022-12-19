import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_WORKOUT } from '../../utils/queries';
import { ADD_WORKOUT } from '../../utils/mutations';


const WorkoutForm = () => {
    const [formState, setFormState] = useState({
      name: '',
      exercises: '',
    });
    console.log(formState)
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
      update(cache, { data: { addWorkout } }) {
          try {
              const { workouts } = cache.readQuery({ query: QUERY_WORKOUT });
  
              cache.writeQuery({
                  query: QUERY_WORKOUT,
                  data: { workouts: [addWorkout, ...workouts] },
              });
          } catch (e) {
              console.error(e);
          }
      },
  });
  
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await addWorkout({
        variables: {userId:"63989f961ff339c1f59edf57", name:formState.name, exercises:formState.exercises },
      });
  console.log(data)
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  

    return (
        <div>
            <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className='addWorkoutSection'>
        <div className="addWorkout">
          <input
            name="name"
            placeholder="Add Workout Name"
            value={formState.name}
            className="form-input w-100"
            onChange={handleChange}
          ></input>
        </div>
       </div>

        <div className="col-12 col-lg-3">
          <button className="addWorkout-btn" type="submit">
            Add Exercises
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
        </div>
    )
        
    
};

export default WorkoutForm