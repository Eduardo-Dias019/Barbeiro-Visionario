import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

//STYLES
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div id="video-container-home">
        <section id="next-class">
          <span>Próxima aula</span>
          <div id="class-watched-container">
            <div className="video">AQUI VAI A AULA</div>
          </div>
          <Link to="/Class">
            <button>ASSISTIR</button>
          </Link>
        </section>
        <main>
          <section id="last-watched">
            <span>Últimas aulas assistidas</span>
            <div id="class-watched-container">
              <div className="video">AQUI VAI A AULA</div>
              <div className="video">AQUI VAI A AULA</div>
              <div className="video">AQUI VAI A AULA</div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
