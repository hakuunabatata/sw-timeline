import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import { FiPlay, FiMessageCircle, FiTv, FiBookOpen, FiFilm } from "react-icons/fi";

export default function MainPage() {
  return (
    <div id="container">
      <div className="logo">
        <img src={Logo} alt="Star Wars Logo" />
      </div>

      <ul>
        <li className="game legends">
          <img
            src="https://starecat.com/content/wp-content/uploads/star-wars-the-cage-awakens-nicolas-cage-poster.jpg"
            alt=""
          />
          <div className="title">Star Wars Battle for Varzea Paulista</div>
          <div className="type">
            <div className="icon">
              <FiPlay size={50} />
            </div>
            <div className="typetxt">Game</div>
          </div>
          <div className="timeline">135 BBC</div>
          <div className="series">Battle for Varzea</div>
          <div className="date">25-25-25</div>
          <div className="universe">Legends</div>
        </li>
        <li className="comic canon">
          <img
            src="https://starecat.com/content/wp-content/uploads/star-wars-the-cage-awakens-nicolas-cage-poster.jpg"
            alt=""
          />
          <div className="title">Star Wars Battle for Varzea Paulista</div>
          <div className="type">
            <div className="icon">
              <FiMessageCircle size={50} />
            </div>
            <div className="typetxt">Comic</div>
          </div>
          <div className="timeline">135 BBC</div>
          <div className="series">Battle for Varzea</div>
          <div className="date">25-25-25</div>
          <div className="universe">Canon</div>
        </li>
        <li className="film canon">
          <img
            src="https://starecat.com/content/wp-content/uploads/star-wars-the-cage-awakens-nicolas-cage-poster.jpg"
            alt=""
          />
          <div className="title">Star Wars Battle for Varzea Paulista</div>
          <div className="type">
            <div className="icon">
              <FiFilm size={50} />
            </div>
            <div className="typetxt">Film</div>
          </div>
          <div className="timeline">135 BBC</div>
          <div className="series">Battle for Varzea</div>
          <div className="date">25-25-1925</div>
          <div className="universe">Canon</div>
        </li>
        <li className="novel legends">
          <img
            src="https://starecat.com/content/wp-content/uploads/star-wars-the-cage-awakens-nicolas-cage-poster.jpg"
            alt=""
          />
          <div className="title">Star Wars Battle for Varzea Paulista</div>
          <div className="type">
            <div className="icon">
              <FiBookOpen size={50} />
            </div>
            <div className="typetxt">Novel</div>
          </div>
          <div className="timeline">135 BBC</div>
          <div className="series">Battle for Varzea</div>
          <div className="date">25-25-25</div>
          <div className="universe">Legends</div>
        </li>
        <li className="tv legends">
          <img
            src="https://starecat.com/content/wp-content/uploads/star-wars-the-cage-awakens-nicolas-cage-poster.jpg"
            alt=""
          />
          <div className="title">Star Wars Battle for Varzea Paulista</div>
          <div className="type">
            <div className="icon">
              <FiTv size={50} />
            </div>
            <div className="typetxt">TV</div>
          </div>
          <div className="timeline">135 BBC</div>
          <div className="series">Battle for Varzea</div>
          <div className="date">25-25-25</div>
          <div className="universe">Legends</div>
        </li>
      </ul>
    </div>
  );
}
