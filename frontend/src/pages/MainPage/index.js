import React, { useState, useEffect } from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import {
  FiPlay,
  FiMessageCircle,
  FiTv,
  FiBookOpen,
  FiFilm,
} from "react-icons/fi";
import api from "../../services/api";
import axios from 'axios'

export default function MainPage() {
  const [medias, setMedia] = useState([]);

  function setIcon(media) {
    if (media === "game") {
      return <FiPlay size={50} />;
    }
    if (media === "tv") {
      return <FiTv size={50} />;
    }
    if (media === "novel") {
      return <FiBookOpen size={50} />;
    }
    if (media === "comic") {
      return <FiMessageCircle size={50} />;
    }
    if (media === "film") {
      return <FiFilm size={50} />;
    }
  }

  useEffect(() => {
    api.get("media").then((response) => {
      setMedia(response.data);
    });
    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:3333/media'
    // }).then(res => {setMedia(res.data)})
  });

  return (
    <div id="container">
      <div className="logo">
        <img src={Logo} alt="Star Wars Logo" />
      </div>

      <ul>
        {medias.map((media) => (
          <li key={media._id} className={media.media + " " + media.universe}>
            <img src={media.image} alt="" />
            <div className="title">{media.title}</div>
            <div className="type">
              <div className="icon">{setIcon(media.media)}</div>
              <div className="typetxt">{media.media}</div>
            </div>
            <div className="timeline">{media.timeline}</div>
            <div className="series">{media.series}</div>
            <div className="date">{media.releasedate}</div>
            <div className="universe">{media.universe}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
