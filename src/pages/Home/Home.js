import React from "react";
<<<<<<< HEAD
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
=======
import profilePic from "../../assets/profile-pic.jpg";
>>>>>>> 2d0970dd9de444238f80b2076292e4636bdfd5ef

//STYLES
import "./Home.css";

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      <main>
        <section id="next-class">
          <span>Próxima aula</span>
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
          <Link to="/Class">
            <button>ASSISTIR</button>
          </Link>
        </section>
=======
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
>>>>>>> 2d0970dd9de444238f80b2076292e4636bdfd5ef
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
<<<<<<< HEAD
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
      <Footer />
=======
        </section>
      </main>
>>>>>>> 2d0970dd9de444238f80b2076292e4636bdfd5ef
    </div>
  );
};

export default Home;
