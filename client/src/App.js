import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Workout from './Workout';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path="/workouts">
          <Workout />
        </Route>
          </Switch>
            <p>
          Fill in homepage info and content here
          </p>
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
