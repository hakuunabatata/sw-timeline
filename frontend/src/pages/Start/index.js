import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'

export default function Start() {
  
  return (
    <div id="container">
      <div className="logo">
        <img src={Logo} alt="Star Wars Logo" />
      </div>
      <Link className="start" to='/media'>Start</Link>
    </div>
  );
}
