import React from "react";
import styled from "styled-components";
import { ProyectosComponent } from "../components/ProyectosComponent/ProyectosComponent";
const Portfolio = () => {
  return (
    <ContainerPortfolio>
      <ProyectosComponent />
    </ContainerPortfolio>
  );
};
const ContainerPortfolio = styled.div`
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
`;
export default Portfolio;
