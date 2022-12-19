import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ExerciseList from '../components/ExerciseList';
import ExerciseForm from '../components/ExcersiseForm';

import { QUERY_WORKOUT } from '../utils/queries';

const SingleWorkout = () => {
    const { workoutId } = useParams();

    const { data } = useQuery(QUERY_WORKOUT, {
        // pass URL parameter
        variables: { workoutId: workoutId },
      });

      const exercises = data?.exercises || {};

      return (
        <div className='body'>
           <section className="main-Container">
        <div className="excercise-Container">
          <div className="excerciseTitle">
            <h2>Add Exercise</h2>
          </div>
          <ExerciseForm />
        </div>
      </section>
      <section className="main-Container">
        <div className="workoutContainer">
          <div className="excerciseTitle">
            <h2>Your Excercises</h2>
          </div>
          <ExerciseList
          exercises={exercises}
          title="test"
           />
        </div>
      </section>
        </div>


      )






}
export default SingleWorkout;