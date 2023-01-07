import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ContainerNavbar>
      <UL>
        <NavLink to="/" activeClassName="active" className="navbar">
          HOME
        </NavLink>
        {/* <NavLink
          exact
          to="/services"
          activeClassName="active"
          className="navbar"
        >
          SERVICES
        </NavLink> */}
        {/* <NavLink exact to="/resume" activeClassName="active" className="navbar">
          RESUMEN
        </NavLink> */}
        <NavLink
          exact
          to="/portfolio"
          activeClassName="active"
          className="navbar"
        >
          PROYECTOS
        </NavLink>

        <NavLink
          exact
          to="/contact"
          activeClassName="active"
          className="navbar"
        >
          CONTACTO
        </NavLink>
        {/* <NavLink exact to="/blog" activeClassName="active" className="navbar">
          MI BLOG
        </NavLink> */}
      </UL>
    </ContainerNavbar>
  );
};

const ContainerNavbar = styled.div``;

const UL = styled.ul`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export default Navbar;
