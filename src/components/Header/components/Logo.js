import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <ContentLogo>
      <Titulo>
        <Span> {">"}</Span>
        <Spansub>{"_"}</Spansub> <SpanTitulo>JASR-DEV</SpanTitulo>
      </Titulo>
    </ContentLogo>
  );
};

const ContentLogo = styled.div``;

const Titulo = styled.h1`
  color: #d7dae3;
  margin: 0px;
  padding: 0px;
  font-size: 30px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
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

export default Logo;
