import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Workout from '../Workout';
import Navbar from '../Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/workouts">
                <Workout />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <p>Fill in homepage info and content here</p>
          </div>
      </div>
    </Router>
  );
}

export default App;
