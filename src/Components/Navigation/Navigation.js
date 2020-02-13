import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";

export default function Navigation() {
  return (
    <div className="Nav">
      <div className="Logo_Nav">
      <Link to="/">
        <img
          src="https://drive.google.com/uc?export=view&id=1RdQVj8IaupekO4ryMHjcVGsUSP0rmavG"
          height="75"
          width="75"
          alt="logo"
        />
        </Link> <span className="name">KhiavDim Lee</span>
      </div>    
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
