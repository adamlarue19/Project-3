import React from 'react';


const Search = ({ search }) => {

  return (
    <div className="mainConatiner">
    <div className="aboutContainer">
      <div className="headingGitFit">
        <h2>About Git-Fit</h2>
      </div>
    </div>
    <p className="pGitFit">This is the about Git-Fit section</p>

    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search here"
        // onChange={handleChange}
        value={search}
      />
      <div className="searchInfo">
        This is going to be where the information displays
      </div>
    </div>
  </div>

  );  
}


  export default Search;