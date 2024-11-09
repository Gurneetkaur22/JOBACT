import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            JOBACT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fs-5 active" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="login.html">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
