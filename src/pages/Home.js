import React from "react";
import styled from "styled-components";
import { HomeComponent } from "../components/HomeComponent/HomeComponent";

const Home = () => {
  return (
    <ContainerHome>
      <HomeComponent />
    </ContainerHome>
  );
};

const ContainerHome = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
`;

export default Home;
