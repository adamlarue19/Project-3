import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
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
            <Route exact path="/" element={<Home />} />
            <Route path="/workouts" element={<Workout/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
