
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Workout from "./pages/Workout";
import Header from "./components/Header";
// import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <div className="content">
          <Switch>
            <Route 
            path="/" 
            elements={<Home />}
            >
              <Home />
            </Route>
            <Route 
            path="/workouts" 
            elements={<Workout />}
            >
              <Workout />
            </Route>
          </Switch>
          {/* <p>Fill in homepage info and content here</p> */}
        </div>
        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
