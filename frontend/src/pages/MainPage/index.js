import React, { useState, useEffect } from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import {
  FiPlay,
  FiMessageCircle,
  FiTv,
  FiBookOpen,
  FiFilm,
  FiHash,
  FiPlus,
  FiAtSign,
} from "react-icons/fi";
import api from "../../services/api";

export default function MainPage() {
  const [medias, setMedia] = useState([]);
  const [filter, setFilter] = useState("{}");
  const types = [
    "all",
    "film",
    "tv",
    "novel",
    "game",
    "comic",
    "canon",
    "legends",
  ];

  function setIcon(type) {
    switch (type) {
      case "all":
        return <FiAtSign size={50} />;
      case "game":
        return <FiPlay size={50} />;
      case "tv":
        return <FiTv size={50} />;
      case "novel":
        return <FiBookOpen size={50} />;
      case "comic":
        return <FiMessageCircle size={50} />;
      case "film":
        return <FiFilm size={50} />;
      case "legends":
        return <FiHash size={50} />;
      case "canon":
        return <FiPlus size={50} />;
    }
  }

  function setTimeline(timeline) {
    if (timeline > 0) {
      return `${timeline} ABY`;
    }
    if (timeline < 0) {
      return `${timeline * -1} BBY`;
    }
  }

  useEffect(() => {
    api
      .get("http://localhost:3300/infos", {
        headers: {
          Authorization: filter,
        },
      })
      .then((res) => {
        setMedia(res.data);
      });
  }, [filter]);

  return (
    <div id="container">
      <div className="logo">
        <img src={Logo} alt="Star Wars Logo" />
      </div>
      <ul>
        <li className="btncontainer">
          {types.map((type) => (
            
            <button
              className={`filterbtn ${type}`}
              onClick={() => {
                if (type === "all") {
                  setFilter("{}");
                } else {
                  var index = "";
                  if (["canon", "legends"].includes(type)) {
                    index = "universe";
                  } else {
                    index = "media";
                  }
                  setFilter(`{"${index}":"${type}"}`);
                }
              }}
            >
              <div className="btnicon">{setIcon(type)}</div>
              <div className="btntxt">{type}</div>
            </button>
          ))}
        </li>
        {medias.map((media) => (
          <li key={media._id} className="content">
            <img src={media.image} alt="" />
            <div className="title">{media.title}</div>
            <div className={`type ${media.media}`}>
              <div className="icon">{setIcon(media.media)}</div>
              <div className="typetxt">{media.media}</div>
            </div>
            <div className="timeline">{setTimeline(media.timeline)}</div>
            <div className="series">{media.series}</div>
            <div className="date">{media.releasedate}</div>
            <div className={`universe ${media.universe}`}>{media.universe}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
