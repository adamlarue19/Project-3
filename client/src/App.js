import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className='content'>
          <Switch>
        <Route path='/'>
          <Home />
        </Route>
          </Switch>
        </div>

    </div>
    </Router>
  );
}

export default App;
