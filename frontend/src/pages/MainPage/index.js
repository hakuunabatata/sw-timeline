import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";

export default function MainPage() {
  return (
    <div id="container">
      <header>
        <img className="logo" src={Logo} alt="Star Wars Logo" />
        <input type="text" placeholder="Search Media" id="searchinp" />
        <button className="searchbtn">
          <FiSearch size={40} />
        </button>
        <button className="update">Update</button>
      </header>
    </div>
  );
}
