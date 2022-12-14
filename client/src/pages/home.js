import React from 'react';
// import { useQuery } from '@apollo/client';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
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
          // value={searchInput}
        />
        <div className="searchInfo">
          This is going to be where the information displays
        </div>
      </div>
    </div>

    );

  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Home;
