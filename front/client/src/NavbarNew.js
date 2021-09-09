import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarNew extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  style={{height:'5rem',fontFamily:'cursive',fontSize:'2rem'}}>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link style={{color:'red'}} to="/Cart" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link  style={{color:'red'}} to="/Admin" className="nav-link">Admin</Link>
          </li>
          <li className="navbar-item">
          <Link  style={{color:'red'}} to="/Stas" className="nav-link">Stas</Link>
          </li>
        </ul>
        </div>
      </nav>
      
    );
  }
}