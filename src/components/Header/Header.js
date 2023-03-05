import React from "react";
import "./Header.css";
import profilePic from "../../assets/profile-pic.jpg";

import ProgressBar from "../ProgressBar/ProgressBar";

const Header = () => {
  const percentage = 50;

  return (
    <div>
      <header id="header-id">
        <div id="tittle-header">
          <h2>Barbeiro Destinado</h2>
        </div>
        <div id="header-container-info">
          <div id="text-progress">
            <span>Progresso de conclusão</span>
          </div>
          <div id="progress-bar-container">
            <ProgressBar percentage={percentage} />
          </div>
          <div id="user-name">
            <span>Eduardo Dias</span>
          </div>
          <div id="profile-pic">
            <img src={profilePic} alt="profilePic" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
