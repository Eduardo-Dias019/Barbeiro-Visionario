import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

//STYLES
import "./Home.css";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
