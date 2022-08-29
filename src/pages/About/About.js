//IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"

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
        <h3>
          Seja bem vindo ao curso barbeiro destinado! Aqui você aprenderá a ser
          um barbeiro profissional, dominar qualquer técnica e saber para onde
          está indo!
        </h3>
        <span id="btn-signin">
          <Link to="/Signin">
            <input type="button" value="ENTRAR" />
          </Link>
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
            <span id="tittle-resume">
              Já se perdeu durante um corte? <br /> Cliente pediu um corte e
              você não sabia nem como começar? <br /> E aquele cliente que
              cortou uma vez e não voltou mais, por que?
            </span>
            <p>
              Neste curso você terá acesso a várias aulas de cortes explicado
              por mínimos detalhes, pra aprender de uma vez por todas! Aulas do
              básico ao avançado Tudo que você precisa pra poder começar!!!
              Aulas de Degrade, corte social, corte na tesoura, barba modelada,
              visagismo, colorimetria…
            </p>
          </div>
        </section>

        <section id="highlights">
          <h2>COM BÔNUS DE AULAS PRECIOSAS QUE NÃO TE ENSINAM NOS CURSOS</h2>
          <div id="bg-highlight">
            <div id="highlight-1">
              <h4>
                Bônus 1 - Como ganhar mais de 1.000 reais cortando cabelo sem
                mesmo ter barbearia
              </h4>
            </div>

            <div id="highlight-2">
              <h4>
                Bônus 2 - Como ganhar mais dinheiro e trabalhar menos na sua
                barbearia
              </h4>
            </div>

            <div id="highlight-3">
              <h4>Bônus 3 - Como fidelizar clientes</h4>
            </div>

            <div id="highlight-4">
              <h4>
                Bônus 4 - Como conseguir clientes novos sem investir nada ou
                como aumentar valor do seu corte
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
      <Footer/>
    </div>
  );
};

export default About;
