import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">about</Link>
        <Link className="nav-link" to="/contact">contact</Link>
        <Link className="nav-link" to="/users">users</Link>
      </div>
    </div>
  </div>
</nav>


    );
}

export default Navbar;
