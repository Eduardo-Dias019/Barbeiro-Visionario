import React from "react";
import Concluido from "../../Components/ClassProgressConclusion/Concluido/Concluido";
import NaoConcluido from "../../Components/ClassProgressConclusion/NaoConcluido/NaoConcluido"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import "./Class.css";

const Class = () => {
  return (
    <div>
      <Header />
      <main id="main-id">
        <div id="watch-class-section">
          <section id="watch-class">
            <div>
              <span>Example Video</span>
              <iframe
                width="960"
                height="580"
                src="https://www.youtube.com/embed/GicFdDHo-zE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </section>
          <section id="feedback">
            <span>Deixe seu feedback</span>
            <textarea cols="30" rows="5" placeholder="Digite aqui"></textarea>
            <input type="button" value="ENVIAR" />
          </section>
        </div>
        <div id="menu-class-section">
          <section>
            <div id="menu-class">
              <h2>Aulas do curso</h2>
              <div id="modulo-name-1">
                <h3>Módulo 1</h3>
              </div>
              <div id="class">
                <div>
                    <Concluido />
                </div>
                <span>Aula 1</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 2</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 3</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 4</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 5</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 6</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 7</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 8</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 9</span>
              </div>
              <div id="class">
                <div>
                    <NaoConcluido />
                </div>
                <span>Aula 10</span>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 2</h3>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 3</h3>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 4</h3>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 5</h3>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 6</h3>
              </div>
              <div id="modulo-name-1">
                <h3>Módulo 7</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Class;
