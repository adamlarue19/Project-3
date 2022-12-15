import React, { useState } from 'react';
import { json } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import {apiCall} from "../utils/axiosApi"


const SearchForm = () => {
    const [results, setResults] = useState([]);
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
    setResults(data)
    console.log(results);
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
                  placeholder="Type muscle"
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
{results.map((exercise) => JSON.stringify(exercise))}
          </div>
        </div>
      </div>
  );
}

export default SearchForm;
