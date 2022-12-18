import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_WORKOUTS } from '../../utils/queries';
import { ADD_WORKOUT } from '../../utils/mutations';
// import { ADD_EXERCISE } from '../utils/mutations';

const WorkoutForm = () => {
    const [name, setName] = useState('');

    const [exercise, setexercise] = useState(0);

    const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
        update(cache, { data: { addWorkout } }) {
            try {
                const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });

                cache.writeQuery({
                    query: QUERY_WORKOUTS,
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
                variables: {
                    name,
                },
            });

            setName('');
        } catch (err) {
            console.error(err);
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name' && value.length <= 280) {
            setName(value);
            setexercise(value.length);
        }
    };

    return (
        <div>
            <h2>Create your workout!</h2>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9">
                    <textarea
                        name="thoughtText"
                        placeholder="Add name here"
                        value={name}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button className="btn btn-primary btn-block py-3" type="submit"></button>
            </form>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
        </div>
    );
};

export default WorkoutForm