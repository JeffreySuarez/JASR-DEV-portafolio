import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./NavbarBlog.css";

const NavbarBlog = () => {
  const [toggle, setToggle] = useState(false);
  // const [divHeight, setDivHeight] = useState(0);

  const togglearray = () => {
    setToggle(!toggle);
  };

  // let valor = 60;
  // setDivHeight(valor);

  // console.log(divHeight);

  // const ref = useRef(null);

  // useLayoutEffect(() => {
  //   console.log(ref.current.offsetHeight);
  //   const variable = toggle ? ref.current.offsetHeight : 0;
  //   setDivHeight(variable);
  //   console.log(variable);
  //   console.log("height : ", variable);
  // }, [toggle]);

  // console.log(toggle);
  // console.log(divHeight);

  const valor = {
    // height: `${divHeight}px`,
    height: "10rem",
  };
  const valor1 = {
    // height: `${divHeight}px`,
    height: "0rem",
  };

  // if (toggle) {
  //   setDivHeight(valor);
  // } else {
  //   setDivHeight(0);
  // }
  // const valor = 60;

  // setDivHeight(valor);

  // if (toggle) {
  //   setDivHeight(60);
  // } else {
  //   setDivHeight(0);
  // }

  return (
    <ContainterNavbarBlog>
      <ContainerList>
        <ListItem>
          <ListButton>
            <i className="fab fa-html5  icono"></i>

            <NavLink
              to="/Blog/html"
              activeClassName="active"
              className="navbarBlog"
            >
              HTML
            </NavLink>
          </ListButton>
        </ListItem>
        <ListItem>
          <ListButton>
            <i className="fab fa-css3-alt icono"></i>

            <NavLink
              to="/Blog/css"
              activeClassName="active"
              className="navbarBlog"
            >
              CSS
            </NavLink>
          </ListButton>
        </ListItem>
        <ListItem>
          <ListButton
            onClick={togglearray}
            className={"list-button-click" + (toggle ? " arrow" : "")}
          >
            <i className="fab fa-js icono"></i>

            <NavLink
              to="/Blog/javascript"
              activeClassName="active"
              className="navbarBlog"
            >
              JavaScript
            </NavLink>

            <i className="fas fa-chevron-right icono"></i>
          </ListButton>

          <Show style={toggle ? valor : valor1}>
            <Link to="/Blog/javascript" className="list_inside">
              inside
            </Link>

            <Link to="/Blog/javascript" className="list_inside">
              inside
            </Link>

            <Link to="/Blog/javascript" className="list_inside">
              inside
            </Link>
          </Show>
        </ListItem>
        <ListItem>
          <ListButton>
            <i className="fab fa-react icono"></i>

            <NavLink
              to="/Blog/reactjs"
              activeClassName="active"
              className="navbarBlog"
            >
              React JS
            </NavLink>
          </ListButton>
        </ListItem>
        <ListItem>
          <ListButton>
            <i className="fab fa-node icono"></i>

            <NavLink
              to="/Blog/nodejs"
              activeClassName="active"
              className="navbarBlog"
            >
              Node JS
            </NavLink>
          </ListButton>
        </ListItem>
        <ListItem>
          <ListButton>
            <i className="fas fa-database icono"></i>

            <NavLink
              to="/Blog/bd"
              activeClassName="active"
              className="navbarBlog"
            >
              Data Base
            </NavLink>
          </ListButton>
        </ListItem>
      </ContainerList>
    </ContainterNavbarBlog>
  );
};

const ContainterNavbarBlog = styled.div`
  padding: 10px;
  width: 20%;
  display: flex;
  /* border: 2px solid #f70838; */
  flex-direction: column;
  height: 100vh;
  position: fixed;
`;
const ContainerList = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
  list-style: none;
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

const ListButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 70%;
  margin: 0 auto;
`;

const Show = styled.div`
  width: 75%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #f70838;
  transition: height 0.4s;
`;

export default NavbarBlog;
