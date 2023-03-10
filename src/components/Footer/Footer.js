import React from "react";

import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter>
      <Separador></Separador>
      <Titulo>
        <Span> {">"}</Span>
        <Spansub>{"_"}</Spansub> <SpanTitulo>JASR-DEV</SpanTitulo>
      </Titulo>
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
          href="https://www.linkedin.com/in/jeffreysuarezrey
          "
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
      <P>2022 &copy; Rights Reserved By JASR-DEV</P>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerIconos = styled.div`
  display: flex;

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

const Separador = styled.div`
  height: 2px;
  width: 100%;
  background: #4e5460;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: #4e5460;
`;

const Titulo = styled.h1`
  color: #d7dae3;
  margin: 0px;
  padding: 0px;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Span = styled.span`
  color: #f70838;
`;

const SpanTitulo = styled.span``;

const Spansub = styled.span`
  color: #f70838;
  animation: intermitente 1.5s linear infinite;

  @keyframes intermitente {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

// const linkRedSocial = styled.a`
//   list-stile: none;
// `;

export default Footer;
