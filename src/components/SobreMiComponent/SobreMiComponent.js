import React from "react";
import "./SobreMiComponent.css";
import Certificado1 from "../.././assets/doc/DesarrolloWebCoderhouse.png";
import Certificado2 from "../.././assets/doc/javascriptCoderhouse.png";
import Certificado3 from "../../assets/doc/Api-rest.png";
import Certificado4 from "../../assets/doc/diploma-frontend-developer.pdf";
import Certificado5 from "../../assets/doc/diploma-frontend-developer-practico.pdf";
import Certificado6 from "../../assets/doc/Curso Profesional de JavaScript.pdf";
import Certificado7 from "../../assets/doc/cursoDeProgramacionOrientadaAobjetos.pdf";
import Certificado8 from "../../assets/doc/cursoProfesionalDeReact.pdf";
import Certificado9 from "../../assets/doc/React.png";

export const SobreMiComponent = () => {
  return (
    <div className="sobreMi">
      <h4 className="sobreMiTitulo">
        Mis <span>Skills</span>
      </h4>
      <p className="sobreMiParrafo">
        Para un Desarrollador de Software es muy importante adquirir habilidades
        y herramientas para construir cada proyecto. No solamente quedarse con
        unas cuantas habilidades hay que seguir aprendiendo y actualizarse.
        <br />
        <br />
        En mi recorrido del aprendizaje en la programación, he adquirido las
        siguientes habilidades:
      </p>
      <div className="skills">
        <div className="skill">
          <i className="fab fa-html5 fa-5x"></i>
          <h4>html</h4>
        </div>
        <div className="skill">
          <i className="fab fa-css3-alt fa-5x"></i>
          <h4>css</h4>
        </div>
        <div className="skill">
          <i className="fab fa-sass fa-5x"></i>
          <h4>sass</h4>
        </div>
        <div className="skill">
          <i className="fab fa-bootstrap fa-5x"></i>
          <h4>Bootstrap</h4>
        </div>
        <div className="skill">
          <i className="fab fa-js fa-5x"></i>
          <h4>JavaScript</h4>
        </div>
        <div className="skill">
          <i className="fab fa-react fa-5x"></i>
          <h4>React js</h4>
        </div>
        <div className="skill">
          <i className="fab fa-python fa-5x"></i>
          <h4>Python</h4>
        </div>
        <div className="skill">
          <i className="fab fa-git-alt fa-5x"></i>
          <h4>git</h4>
        </div>
        <div className="skill">
          <i className="fab fa-github fa-5x"></i>
          <h4>github</h4>
        </div>
      </div>
      <h4 className="misEstudios">
        Mis <span>Estudios</span>{" "}
      </h4>
      <div className="misEstudiosdiv">
        <div className="contenedorI">
          <i className="fas fa-graduation-cap"></i>
        </div>

        <p>
          A finales del 2020 comencé con mi preparación para ser Desarrollador
          de Software. A continuación está la cronología de mis estudios.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Noviembre 2020 - Febrero 2021</p>
          <h5>
            Desarrollo Web <span> - Coderhouse </span>{" "}
          </h5>
          <p>
            Se adquirio los conocimientos de html, css, sass, bootstrap, git,
            github, durante 10 semanas con clases sincronicas. En la escuela
            digital CODERHOUSE 100% online.{" "}
            <a
              className="certificado"
              href={Certificado1}
              target="_blank"
              rel="noreferrer"
            >
              Ver certificado
            </a>
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Enero 2021</p>
          <h5>
            Máster en CSS <span> - Udemy</span>{" "}
          </h5>
          <p>
            En el curso de adquirio conocimientos para dominar las tecnologias
            html, css, maquetación web, realización de páginas responsive, sass,
            less, flexbox, css grid y bootstrap, tecnologías orientadas al
            diseño web.
          </p>
          <a
            className="certificado"
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-bc747765-8238-461f-ae46-691d77940a8b.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Febrero 2021</p>
          <h5>
            SEO Y POSICIONAMIENTO WEB <span> - Udemy</span>{" "}
          </h5>
          <p>
            Se aprendió todo lo necesario para posicionar cualquier proyecto web
            en los buscadores, consiguiendo más vistas, más tráfico, más
            visibilidad y relevancia en internet.
          </p>
          <a
            className="certificado"
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-c45d0c85-de1d-42e0-b9ee-171532eeee19.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Marzo 2021</p>
          <h5>
            Master en Bootstrap 4 <span> - Udemy</span>{" "}
          </h5>
          <p>
            En este curso se profundizo con las skill de html, css y bootstrap
            creando proyectos con la filosofía de "Mobile First".
          </p>
          <a
            className="certificado"
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-dd2ced02-0a0a-4998-9809-0f16b3a3a370.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Marzo 2021 - Mayo 2021</p>
          <h5>
            JavaScript <span> - Coderhouse</span>{" "}
          </h5>
          <p>
            En la siguiente etapa se adquirio el conocimiento del lenguaje de
            programacion javascript, durante 8 semanas con clases sincronicas.
            En la escuela digital CODERHOUSE 100% online.
          </p>
          <a
            className="certificado"
            href={Certificado2}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Febrero 2021 - Mayo 2021</p>
          <h5>
            Desarrollo de plataformas Web para internet de las cosas IOT{" "}
            <span> - DIIGNAL</span>{" "}
          </h5>
          <p>
            Se adquirio conocimientos en la creacion de una pagina web
            utilizando tecnologias de html, css, javascript y el framework
            Vue.js para la parte del frontend. Para el backend se utlizo Node.js
            con el framework express. El objetivo del curso es configurar un
            dispositivo electronico IoT, donde enviara informacion de sus
            sensores a la plataforma por medio del protocolo MQTT.
          </p>
          <a
            className="certificado"
            href="https://drive.google.com/file/d/1sUAZN8s3bGzEf8wYcRDveCBIeUmXcEQ3/view"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Octubre 2021</p>
          <h5>
            Curso Básico de javascript <span> - platzi</span>{" "}
          </h5>
          <p>
            En este curso, se refuerzan los conceptos básicos del lenguaje de
            programación javascript.
          </p>
          <a
            className="certificado"
            href="https://platzi.com/p/jrdeveloper21/curso/1814-course/diploma/detalle/"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Octubre 2021</p>
          <h5>
            Curso Práctico de javascript <span> - platzi</span>{" "}
          </h5>
          <p>
            En este modulo, se aplico las bases de javascript realizando varios
            ejercicios prácticos del lenguaje de programación.
          </p>
          <a
            className="certificado"
            href="https://platzi.com/p/jrdeveloper21/curso/2327-course/diploma/detalle/"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Noviembre 2021 - actualmente estudiando</p>
          <h5>
            Tecnólogo Analisis y desarrollo de software <span> - SENA</span>{" "}
          </h5>
          <p>
            Este programa tiene una duracion de 3984 horas. Al terminar la
            carrera de la Tecnologia en Análisis y desarrollo de software, me
            podré desempeñar desarrollando soluciones de sotware en el sector
            TI. De igual forma podré participar como analista, diseñador y
            programador de software en proyectos específicos de acuerdo con la
            necesidad del servicio. También tendré la capacidad de
            autoaprendizaje y actualización permanente de acuerdo con las nuevas
            tendencias de desarrollo de software en el mercado. Al finalizar
            tendre la habilidad de un programador FullStack.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Enero 2022</p>
          <h5>
            JavaScript: Guía para dominar el lenguaje. <span> - Udemy</span>{" "}
          </h5>
          <p>
            En este curso seguí profundizando en el lenguaje de programación
            javascript a un nivel intermedio - avanzado.
          </p>
          <a
            className="certificado"
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-16a72db6-d9d3-4d21-aa14-63c0da5b8755.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Enero 2022</p>
          <h5>
            Asincronismo con javascript <span> - Platzi</span>{" "}
          </h5>
          <p>
            En este otro modulo, se comprendio el asincronismo del lenguaje de
            programación de javascript.
          </p>
          <a
            className="certificado"
            href="https://platzi.com/p/jrdeveloper21/curso/1789-course/diploma/detalle/"
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Enero 2022</p>
          <h5>
            Introducción a API REST <span> - EDteam</span>{" "}
          </h5>
          <p>se aprendio los conceptos teóricos sobre la arquitectura REST.</p>
          <a
            className="certificado"
            href={Certificado3}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Marzo 2022</p>
          <h5>
            FrontEnd Developer <span> - Platzi</span>{" "}
          </h5>
          <p>
            Se vio conceptos de html y css, conociendo la anatomía de un
            documento html, sus elementos y propiedades de css.
          </p>
          <a
            className="certificado"
            href={Certificado4}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Marzo 2022</p>
          <h5>
            Práctico de frontend developer <span> - Platzi</span>{" "}
          </h5>
          <p>
            En este modulo se aplico lo visto en las bases de frontend
            utilizando tecnologías de html y css.
          </p>
          <a
            className="certificado"
            href={Certificado5}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Mayo 2022</p>
          <h5>
            Curso Profesional de javascript <span> - Codigofacilito</span>{" "}
          </h5>
          <p>
            Se repasó en profundidad los conceptos de javascript desde las bases
            hasta el trabajo con objetos, programación asíncrona y buenas
            prácticas de programación.
          </p>
          <a
            className="certificado"
            href={Certificado6}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Junio 2022</p>
          <h5>
            Curso de programación orientada a objetos{" "}
            <span> - Codigofacilito</span>{" "}
          </h5>
          <p>
            En este módulo se comprendió el paradigma de programación orientada
            a objetos.
          </p>
          <a
            className="certificado"
            href={Certificado7}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Junio 2022</p>
          <h5>
            Curso Profesional de React.js <span> - codigofacilito</span>{" "}
          </h5>
          <p>
            En este curso se aprendió una de las librerias importantes de
            javascript. Se adquirió conocimientos desde cero para usar React en
            proyectos prácticos.
          </p>
          <a
            className="certificado"
            href={Certificado8}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">13 Agosto 2022 - 24 septiembre 2022</p>
          <h5>
            React.js <span> - CODERHOUSE</span>{" "}
          </h5>
          <p>
            En este curso se aprendio a utilizar la biblioteca mas importante de
            javascript, desde las bases hasta llegar a un nivel intermedio. Se
            aprendio a usar firebase como backend para la realizacion del
            proyecto final. El curso tuvo una duracion de 8 semanas con clases
            sincrónicas. En la escuela digital CODERHOUSE 100% online.
          </p>
          <a
            className="certificado"
            href={Certificado9}
            target="_blank"
            rel="noreferrer"
          >
            Ver certificado
          </a>
        </div>
      </div>
    </div>
  );
};
