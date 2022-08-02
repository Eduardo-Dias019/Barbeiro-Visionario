//IMPORTS
import React from "react";
import { Link } from "react-router-dom";

//STYLES
import "./About.css";

//IMAGES
import headerBG from "../../assets/header-vector.svg";
import barber from "../../assets/barber.jpg";
import biecorte from "../../assets/biecorte.jpg";

const About = () => {
  return (
    <div>
      <header>
        <h1>Barbeiro Destinado</h1>
        <h3>Nunc congue nisi vitae suscipit tellus mauris</h3>
        <span id="btn-signin">
          <input type="button" value="ENTRAR" />
        </span>
        <span id="btn-signup">
          <Link to="/Signup">
            <input type="button" value="CADASTRAR" />
          </Link>
        </span>
        <img id="header-bg" src={headerBG} alt="headerBG" />
      </header>

      <main>
        <section id="resume-course">
          <img src={barber} alt="barber" />
          <div>
            <span id="tittle-resume">Lorem ipsum dolor sit amet</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              phasellus vestibulum lorem sed risus ultricies tristique. Amet
              risus nullam eget felis eget. Tincidunt praesent semper feugiat
              nibh sed pulvinar proin gravida hendrerit. Volutpat diam ut
              venenatis tellus in metus vulputate eu scelerisque. Elementum nibh
              tellus molestie nunc. Dignissim sodales ut eu sem. Molestie nunc
              non blandit massa.
            </p>
          </div>
        </section>

        <section id="highlights">
          <h2>Como é o curso?</h2>
          <div id="bg-highlight">
            <div id="highlight-1">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                phasellus vestibulum lorem sed risus ultricies tristique. Amet
                risus nullam eget felis eget. Tincidunt praesent semper feugiat
                nibh sed pulvinar proin gravida hendrerit.
              </h4>
            </div>

            <div id="highlight-2">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                phasellus vestibulum lorem sed risus ultricies tristique. Amet
                risus nullam eget felis eget. Tincidunt praesent semper feugiat
                nibh sed pulvinar proin gravida hendrerit.
              </h4>
            </div>

            <div id="highlight-3">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                phasellus vestibulum lorem sed risus ultricies tristique. Amet
                risus nullam eget felis eget. Tincidunt praesent semper feugiat
                nibh sed pulvinar proin gravida hendrerit.
              </h4>
            </div>

            <div id="highlight-4">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                phasellus vestibulum lorem sed risus ultricies tristique. Amet
                risus nullam eget felis eget. Tincidunt praesent semper feugiat
                nibh sed pulvinar proin gravida hendrerit.
              </h4>
            </div>
          </div>
        </section>

        <section id="about-the-teacher">
          <h2>Quem é o professor?</h2>
          <div>
            <img src={biecorte} alt="biecorte" />
            <div id="text-teacher">
              <h3>Gabriel Ribeiro (@biecorte)</h3>
              <p>
                Barbeiro com mais de um ano de experiência, sempre inovando e
                atraindo cada vez mais clientes
              </p>
            </div>
          </div>
          <span id="history-teacher">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              phasellus vestibulum lorem sed risus ultricies tristique.
            </p>
          </span>
        </section>

        <section>
          <div id="price-of-course">
            <h2>Qual o valor do curso?</h2>
            <span>Compre o curso por apenas:</span>
            <h3>12x de R$8,50</h3>
            <h4>Ou pague a vista R$97,00</h4>
            <input type="button" value="COMPRAR" />
          </div>
        </section>
      </main>
      <footer>
        <span>Sobre a plataforma </span>
        <span>|</span>
        <span> Políticas de reembolso</span>
        <span>|</span>
        <span>
          Alguma dúvida? entre em contato por este e-mail:
          emailcontato@biecorte.com
        </span>
      </footer>
    </div>
  );
};

export default About;
