import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import NavbarBlog from "../componentsBlog/NavbarBlog/NavbarBlog";

const LayoutBlog = () => {
  return (
    <ContainerLayoutBlog>
      <NavbarBlog />
      <Outlet />
    </ContainerLayoutBlog>
  );
};

const ContainerLayoutBlog = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  display: block;
`;

export default LayoutBlog;
