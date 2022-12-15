import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import Workout from "./pages/Workout";
import Login from "./pages/Login"
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            
            <Route
              path="/workouts"
              element={<Workout />}
            />
            
          </Routes>
          {/* <p>Fill in homepage info and content here</p> */}

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;