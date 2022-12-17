import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_EXERCISE } from '../../utils/queries';
import { ADD_EXERCISE } from '../../utils/mutations';
// import { useQuery } from '@apollo/client';

const ExerciseForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    weight: '',
    reps:'5',
    sets: '6',
  });
  console.log(formState)
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
      variables: {workoutId:"63989f961ff339c1f59edf59", name:formState.name, weight:+formState.weight, reps:+formState.reps, sets:+formState.sets },
    });
console.log(data)
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
        <div className="col-12">
          <textarea
            name="name"
            placeholder="enter name"
            value={formState.name}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
          type="number"
            name="weight"
            placeholder="Add your weight"
            value={formState.weight}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
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






// const Carousel = () => {
//     return (
//         <div className="eCarousel">
//             <div
//               id="carouselExampleControls"
//               class="carousel slide"
//               data-bs-ride="carousel"
//             >
//               <div class="carousel-inner">
//                 <div class="carousel-item active">
//                   <img src="..." class="d-block w-100" alt="..." />
//                 </div>
//                 <div class="carousel-item">
//                   <img src="..." class="d-block w-100" alt="..." />
//                 </div>
//                 <div class="carousel-item">
//                   <img src="..." class="d-block w-100" alt="..." />
//                 </div>
//               </div>
//               <button
//                 class="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   class="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span class="visually-hidden">Previous</span>
//               </button>
//               <button
//                 class="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="next"
//               >
//                 <span
//                   class="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span class="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//     )
// }

export default ExerciseForm;