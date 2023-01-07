import React from "react";
import "./ProyectosComponent.css";

export const ProyectosComponent = () => {
  return (
    <div>
      <div className="contenido-proyecto" id="proyecto">
        <div className="titulo">
          <h2>
            Mis <span>Proyectos</span>
          </h2>
        </div>
        <div className="textoProyecto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            porro quia voluptatem veniam velit recusandae tempora nobis quo,
            optio qui.
          </p>
        </div>
        <div className="proyectos">
          <div className="proyecto-item">
            <div className="proyecto-imagen1"></div>

            <div className="hover-proyecto-item">
              <h3>Proyecto</h3>
              <div className="proyecto-icons">
                <a
                  href="https://github.com/JeffreySuarez/01-html-css-Tienda-Muebles"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fab fa-github"></i>
                </a>
                <a
                  href="https://01-html-css-tienda-muebles.vercel.app/"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto-item">
            <div className="proyecto-imagen2"></div>
            <div className="hover-proyecto-item">
              <h3>Proyecto</h3>
              <div className="proyecto-icons">
                <a
                  href="https://github.com/JeffreySuarez/Project-with-html-css-bootstrap-and-javascript/tree/main/js"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fab fa-github"></i>
                </a>
                <a
                  href="https://project-with-html-css-bootstrap-and-javascript.vercel.app/"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto-item">
            <div className="proyecto-imagen3"></div>

            <div className="hover-proyecto-item">
              <h3>Proyecto</h3>
              <div className="proyecto-icons">
                <a
                  href="https://github.com/JeffreySuarez/My-Portfolio"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fab fa-github"></i>
                </a>
                <a
                  href="https://my-portfolio-wine-psi.vercel.app/"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto-item">
            <div className="proyecto-imagen4"></div>

            <div className="hover-proyecto-item">
              <h3>Proyecto</h3>
              <div className="proyecto-icons">
                <a
                  href="https://github.com/JeffreySuarez/CODERFILM"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fab fa-github"></i>
                </a>
                <a
                  href="https://coderfilm.vercel.app/"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className=" fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
