import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
import {apiCall} from "../utils/apiAxios"


const SearchForm = () => {
    const [formState, setFormState] = useState({ muscle: ''});
      // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    const data = await apiCall(formState.muscle);
    console.log(data);
// data right here 
    // clear form values
    setFormState({
      muscle: ''
    });
  };
    
  return (

    <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Replace </h4>
          <div className="card-body">
          
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="muscle"
                  type="text"
                  value={formState.muscle}
                  onChange={handleChange}
                />

                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
{/* 
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
      </div>
  );
}

export default SearchForm;