import React from "react";
import "./style.css";

export const HomeComponent = () => {
  return (
    <div className="contenedorHome">
      <div className="textoHome">
        <h1>
          Hello, <span>I´m</span>
        </h1>
        <br />
        <h1 className="nombre">Jeffrey Suarez</h1>
        <br />
        <p className="nombreProfesion">Web Developer FrontEnd</p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          quam. Rem debitis dolores at ut facilis placeat atque vitae explicabo?
        </p>
        <br />
        <p>Find me, in my social networks</p>
      </div>
      <div className="imagen"></div>
    </div>
  );
};
