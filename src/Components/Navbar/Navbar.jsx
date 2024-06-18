import React, { Component } from "react";
import "./Navbar.css";
import './MediQueries.css'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <a className="logo" href="index.html">
          <p>VEERESH</p>
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span className="s-1"></span>
          <span className="s-2"></span>
          <span className="s-3"></span>
        </label>
        <div className="list-items-container">
          <ul className="list-items">
            <li className="list-element">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

