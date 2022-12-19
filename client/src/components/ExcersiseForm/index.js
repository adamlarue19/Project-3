import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_EXERCISE } from "../../utils/queries";
import { ADD_EXERCISE } from "../../utils/mutations";
// import { useQuery } from '@apollo/client';

const ExerciseForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    weight: "",
    reps: "",
    sets: "",
  });
  console.log(formState);
  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
      try {
        const { exercises } = cache.readQuery({ query: QUERY_EXERCISE });

        cache.writeQuery({
          query: QUERY_EXERCISE,
          data: { exercises: [addExercise, ...exercises] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExercise({
        variables: {
          workoutId: "639e3fa4e7a699dcc586798b",
          name: formState.name,
          weight: +formState.weight,
          reps: +formState.reps,
          sets: +formState.sets,
        },
      });
      console.log(data);
      // window.location.reload();
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
        <div className="addSectionName">
          <div className="excerciseSearch col-12">
            <input
              name="name"
              placeholder="Add Exercise Name"
              value={formState.name}
              className="form-input w-100"
              onChange={handleChange}
            ></input>
          </div>
          <div className="excerciseSearch col-12 col-lg-9">
            <input
              type="number"
              name="weight"
              placeholder="Add Weight"
              value={formState.weight}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="excerciseSearch col-12 col-lg-9">
            <input
              type="number"
              name="reps"
              placeholder="Add Reps"
              value={formState.reps}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="excerciseSearch col-12 col-lg-9">
            <input
              type="number"
              name="sets"
              placeholder="Add Sets"
              value={formState.sets}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <button className="addEcercise-btn py-3" type="submit">
            Add Exercise
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ExerciseForm;
