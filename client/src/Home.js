import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
    <h2>Homepage test</h2>
    <p> this is test text written in the p element, for the homepage.js file in our react app.</p>
    );
    return 
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Home;
