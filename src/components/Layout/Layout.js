import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
const Layout = () => {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
  background-color: #202020;
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Layout;
