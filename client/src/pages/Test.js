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
    console.log(formState+"line 22");
    
    const data = await apiCall(formState.muscle);
    setResults(data)
    console.log(results+"line 26");
// data right here 
    // clear form values
    setFormState({
      muscle: ''
    });
  };
    
  return (

    <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Replace this </h4>
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
<div>{
results?.map((data) => <li>{data.name}</li>)

/* {results&&results?.map((data) => {
    <div>
       <li><strong>Name:</strong> {data.name}</li>
      <h3>THIS IS TEST SEE IF THIS SHOWS</h3>
    </div>
  
})} */}</div>
          </div>
        </div>
      </div>
  );
}

export default SearchForm;
