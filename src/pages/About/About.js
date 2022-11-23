//IMPORTS
import React from "react";
import Footer from "../../components/Footer/Footer";
import { MdDoneOutline } from "react-icons/md";

//STYLES
import "./About.css";

//IMAGES
import Pole from "../../assets/barber-pole.webp";
import HeaderBG from "../../assets/header-bg.jpg";
import Parallax from "../../assets/parallax.jpg";
import Selo from "../../assets/satisfaction-guarantee.png";

const About = () => {
  return (
    <div className="container-about">
      <header className="header-about">
        <div className="class-header-about">
          <img src={HeaderBG} alt="header bg" />
          <h1>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wYeFAlVC8qU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3>Adquira o curso agora mesmo!</h3>
          <h4>
            De <span>R$119,99</span> por apenas:
          </h4>
          <h2>12 x R$8,80</h2>
          <button className="btn-header">COMPRAR O CURSO</button>
        </div>
      </header>

      <section className="section-about-course">
        <img className="pole-left" src={Pole} alt="barber pole left" />
        <img className="pole-right" src={Pole} alt="barber pole right" />
        <h1>O que você irá aprender neste curso?</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </h3>
      </section>

      <section className="parallax-image">
        <img src={Parallax} alt="parallax" />
      </section>

      <section className="section-course-bonus">
        <h1>E VOCÊ TERÁ ESSES BÔNUS GRÁTIS!</h1>
        <div className="container-bonus">
          <div className="bonus">
            <div className="number-bonus">
              <h2>Bônus 1</h2>
            </div>
            <div className="text-bonus">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h3>
            </div>
          </div>
          <div className="bonus">
            <div className="number-bonus">
              <h2>Bônus 2</h2>
            </div>
            <div className="text-bonus">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h3>
            </div>
          </div>
          <div className="bonus">
            <div className="number-bonus">
              <h2>Bônus 3</h2>
            </div>
            <div className="text-bonus">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h3>
            </div>
          </div>
          <div className="bonus">
            <div className="number-bonus">
              <h2>Bônus 4</h2>
            </div>
            <div className="text-bonus">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-benefits">
        <h1>ADQUIRINDO O CURSO VOCÊ TERÁ ESSES BENEFÍCIOS</h1>
        <h3>
          Acesso vitalício <MdDoneOutline color="rgb(0, 255, 0)" />
        </h3>
        <h3>
          Garantia de 7 dias para devolvermos seu dinheiro caso não goste do
          curso <MdDoneOutline color="rgb(0, 255, 0)" />
        </h3>
        <h3>
          Acesso imediato ao curso <MdDoneOutline color="rgb(0, 255, 0)" />
        </h3>
        <img src={Selo} alt="Selo garantia" />
      </section>

      <section className="section-by-course">
        <h1>Adquira o curso agora mesmo!</h1>
        <h4>
          De <span>R$119,99</span> por apenas:
        </h4>
        <h2>12 x R$8,80</h2>
        <h4>Ou pague à vista:</h4>
        <h2>R$97,00</h2>
        <button className="btn-by-course">COMPRAR O CURSO</button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
