import React from 'react';


import Search from "../components/Search";
import About from "../components/About";

// class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       someKey: 'someValue'
//     };
//   };

 const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <About />
        </div>

        <Search />
      </div>
    </main>
  );
};



//   componentDidMount() {
//     this.setState({
//       someKey: 'otherValue'
//     });
//   }
// };


export default Home;