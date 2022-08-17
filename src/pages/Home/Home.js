import React from "react";
import profilePic from "../../assets/profile-pic.jpg";

//STYLES
import "./Home.css";

const Home = () => {
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

      <main>
        <section id="last-watched">
          <span>Últimas aulas assistidas</span>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3hng-hmSv2Y?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
