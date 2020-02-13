import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";

export default function Navigation() {
  return (
    <div className="Nav">
      <div className="Logo_Nav">
        <Link to="/">
          <img
            src="https://drive.google.com/uc?export=view&id=1h5DdqUmUX-yectICeI-QW5-uLkHhSGTo"
            height="70"
            width="70"
            alt="logo"
            className="Logo_Slide"
          />
        </Link>{" "}
        <span className="name">KhiavDim Lee</span>
      </div>
      <div className="Menu_Middle"></div>
      <div className="Menu">
        <Link to="/about">
          <span className="link">About</span>
        </Link>
        <Link to="/projects">
          <span className="link">Projects</span>
        </Link>
        <Link to="/connect">
          <span className="link">Connect</span>
        </Link>
      </div>
    </div>
  );
}
