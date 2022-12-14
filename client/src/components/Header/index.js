import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navbarHeader = "Navbar";
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1>Git-Fit</h1>
        <Link className="text-dark" to="/home">
          <h2 className="m-0" style={{ fontSize: "20px" }}>
            Home
          </h2>
        </Link>
        <Link className="text-dark" to="/workouts">
          <h2 className="m-0" style={{ fontSize: "20px" }}>
            Workouts
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
