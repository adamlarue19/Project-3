import React, { useState } from 'react';
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
    console.log(formState.muscle)
    const data = await apiCall(formState.muscle);

    console.log(data);
    setResults(data.data)

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


<div>{
results?.map((muscle) => <li>json.stringify{muscle.muscle}</li>)

}</div>

                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
<div>{
results?.map((data, i) => <li key={i}>{data.name}</li>)


/*{results&&results?.map((data) => {
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
