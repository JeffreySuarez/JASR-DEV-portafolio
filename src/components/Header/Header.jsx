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
  justify-content: space-between;

  left: -1px;
  z-index: 99;
  /* background-color: #202020; */
  background-color: #060608;

  @media only screen and (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0px;
    left: 0px;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 1200px) {
    flex: 1;
  }
  @media only screen and (min-width: 992px) {
    flex: 1;
  }
`;
const ContainerNavbar = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1200px) {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 992px) {
    flex: 1;
  }
`;
const ContainerCV = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1200px) {
    flex: 1;
  }
  @media only screen and (min-width: 992px) {
    flex: 1;
  }
`;

export default Header;
