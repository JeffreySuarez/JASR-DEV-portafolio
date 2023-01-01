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
        <NavLink exact to="/resume" activeClassName="active" className="navbar">
          RESUME
        </NavLink>
        <NavLink
          exact
          to="/portfolio"
          activeClassName="active"
          className="navbar"
        >
          PROJECTS
        </NavLink>

        <NavLink
          exact
          to="/contact"
          activeClassName="active"
          className="navbar"
        >
          CONTACT
        </NavLink>
        <NavLink exact to="/blog" activeClassName="active" className="navbar">
          MY BLOG
        </NavLink>
      </UL>
    </ContainerNavbar>
  );
};

const ContainerNavbar = styled.div``;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
`;

export default Navbar;
