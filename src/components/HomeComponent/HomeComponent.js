import React from "react";
import "./style.css";
import { SobreMiComponent } from "../SobreMiComponent/SobreMiComponent";
import styled from "styled-components";

export const HomeComponent = () => {
  return (
    <div>
      <div className="contenedorHome">
        <div className="textoHome">
          <h1>
            Hola, <span>soy</span>
          </h1>
          <br />
          <h1 className="nombre">Jeffrey Suárez</h1>
          <br />
          <p className="nombreProfesion">Desarrollador Web FrontEnd</p>
          <br />
          <p>
            Especializado en el lenguaje de programación JavaScript y React js.
            Soy una persona totalmente autodidacta, siempre buscando en adquirir
            y mejorar mis habilidades en la programación.
          </p>
          <br />
          <p>
            Puedes echar un vistazo a la pagina de proyectos y observar mis
            trabajos.
          </p>
          <br />
          <br />
          <p>También me puedes encontrar en mis redes sociales.</p>
          <ContainerIconos>
            <a
              href="https://www.facebook.com/jeffrey.suarez.9849"
              target="_blank"
              rel="noreferrer"
            >
              <Icono>
                <i class="fab fa-facebook-f"></i>
              </Icono>
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-alexander-suarez-rey-9bb8046b"
              target="_blank"
              rel="noreferrer"
            >
              <Icono>
                <i class="fab fa-linkedin-in"></i>
              </Icono>
            </a>
            <a
              href="https://www.instagram.com/jeffreysuarezrey/"
              target="_blank"
              rel="noreferrer"
            >
              <Icono>
                <i class="fab fa-instagram"></i>
              </Icono>
            </a>
            <a
              href="https://github.com/JeffreySuarez"
              target="_blank"
              rel="noreferrer"
            >
              <Icono>
                <i class="fab fa-github"></i>
              </Icono>
            </a>

            <a
              href="https://twitter.com/jeffreysuarezr"
              target="_blank"
              rel="noreferrer"
            >
              <Icono>
                <i class="fab fa-twitter"></i>
              </Icono>
            </a>
          </ContainerIconos>
        </div>
        <div className="imagen">
          <div className="contenido-imagen"></div>
        </div>
      </div>
      <SobreMiComponent />
    </div>
  );
};

const ContainerIconos = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    text-decoration: none;
  }
`;
const Icono = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 5px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #d7dae3;
  font-size: 20px;
  background-color: #060608;
`;
