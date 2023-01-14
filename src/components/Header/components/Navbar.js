import React, { useState } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { BurguerButton } from "./BurguerButton";

// vamos a utilizar hooks para controlar el estado de apertura y cierre de la hamburguesa

const Navbar = () => {
  let name = "jeffrey";

  const [clicked, setClicked] = useState(false);

  const boton = () => {
    // cuando esta true lo pasa a false y viceversa}
    console.log("hice click");
    setClicked(!clicked);
  };

  console.log(clicked);

  return (
    <ContainerNavbar>
      <div className={`links ${clicked ? "activeMenu" : " "}`}>
        {/* En el anterior expresión, se entiende de la 
        siguiente manera:
        cuando realizamos click se habilita la clase activeMenu y 
        cuando no, no se añade nada */}
        <NavLink
          to="/"
          activeClassName="active"
          className="navbarLink"
          onClick={boton}
        >
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
          className="navbarLink"
          onClick={boton}
        >
          PROYECTOS
        </NavLink>

        <NavLink
          exact
          to="/contact"
          activeClassName="active"
          className="navbarLink"
          onClick={boton}
        >
          CONTACTO
        </NavLink>
        {/* <NavLink exact to="/blog" activeClassName="active" className="navbar">
          MI BLOG
        </NavLink> */}
      </div>
      <div className="Burguer">
        {/* agregamos el boton burguer */}
        <BurguerButton clicked={clicked} cambio={boton} nombre={name} />
      </div>
      <BgDiv className={`initial ${clicked ? "activeMenu" : ""}`}></BgDiv>
    </ContainerNavbar>
  );
};

const ContainerNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .navbarLink {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }

  .active {
    color: #f70838;
    font-weight: bold;
  }

  /* el menu lo enviamos para arriba para hacer el efecto de que aparecen */

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease-in-out;
    .navbarLink {
      display: block;
      padding: 20px 0px;
    }
    @media (min-width: 768px) {
      position: initial;

      .navbarLink {
        display: inline;
        padding: 0px 20px;
        @media (max-width: 992px) {
          padding: 0px 10px;
        }
      }
    }
  }

  /* ahora vamos a traerlos al centro */

  .links.activeMenu {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 200px;
    left: 0;
    right: 0;
    text-align: center;
    @media (min-width: 768px) {
      position: initial;

      .navbarLink {
        display: inline;
        padding: 0px 20px;
      }
    }
  }

  /* ocultamos el menu hamburguesa */

  .Burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

// ahora realizamos la animacion para el menu del burguer

const BgDiv = styled.div`


  position: absolute;
  background-color: #060608;
  top: -700px;
  left: -1000px
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease-in-out;

  @media(min-width: 768px){
    display: none;
  }

  &.activeMenu {
    border-radius:  0 0 80% 0;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
 
  }
`;

export default Navbar;
