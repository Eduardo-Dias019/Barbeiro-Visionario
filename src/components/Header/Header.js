import React from "react";
import './Header.css'
import profilePic from "../../assets/profile-pic.jpg";

const Header = () => {
  return (
    <div>
      <header id="header-id">
        <div id="tittle-header">
          <h2>Barbeiro Destinado</h2>
        </div>
        <div id="text-progress">
          <span>Progresso de conclusão</span>
        </div>
        <div id="progress-bar"></div>
        <div id="purple-progress-bar"></div>
        <div id="user-name">
          <span>Eduardo Dias</span>
        </div>
        <div id="profile-pic">
          <img src={profilePic} alt="profilePic" />
        </div>
      </header>
    </div>
  );
};

export default Header;
