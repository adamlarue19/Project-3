
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Header from "./components/Header";
import Test from "./pages/Test";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <div className="content">
          <Switch>
            <Route 
            exactpath="/" 
            elements={<Home />}
            >
              {/* <Home /> */}
            </Route>
            <Route 
            path="/workouts" 
            elements={<Workout />}
            >
              <Workout />
            </Route>
            <Route 
            exactpath="/test" 
            elements={<Test />}
            >
              <Test />
            </Route>
          </Switch>
          <p>Fill in homepage info and content here</p>
        </div>

      </div>
    </Router>
  );
}

export default App;
