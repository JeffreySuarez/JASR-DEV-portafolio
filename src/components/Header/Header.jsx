import React from "react";
import CV from "./components/CV";
import Logo from "./components/Logo";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerNavbar>
        <Navbar />
      </ContainerNavbar>
      <ContainerCV>
        <CV />
      </ContainerCV>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  position: fixed;

  left: 5px;
  z-index: 99;
  background-color: #202020;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
`;
const ContainerNavbar = styled.div`
  flex: 2;
`;
const ContainerCV = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
`;

export default Header;
