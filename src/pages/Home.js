import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <ContainerHome>
      <div>
        <h2>
          Hello, <span>I´m</span>
        </h2>
      </div>
      <div></div>
    </ContainerHome>
  );
};

const ContainerHome = styled.div`
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
  height: 600px;
`;

export default Home;
