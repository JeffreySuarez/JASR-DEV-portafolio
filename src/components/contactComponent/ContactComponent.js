import "./ContactComponent.css";
import React, { useState } from "react";

/*=====================================================*/
//Importamos la libreria para armar el formulario formik
import { Formik } from "formik";

/*=========================================*/
//importamos la libreria para enviar los mensajes al correo
import emailjs from "@emailjs/browser";

export const ContactComponent = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div className="div-form">
      <h1 className="titulo-form">Contáctame</h1>
      <div className="contenedor-principal">
        <div className="contenido-info">
          <div className="subcontenido">
            <i class="far fa-map"></i>
            <p>Bogotá - Colombia</p>
          </div>
          <div className="subcontenido">
            <i class="fas fa-phone"></i>
            <p>+57-3124216951</p>
          </div>
          <div className="subcontenido">
            <i class="far fa-envelope"></i>
            <p>jeffreysuarezrey@gmail.com</p>
          </div>
        </div>
        <div className="contenido-formulario">
          <Formik
            // configuracion de valores iniciales predeterminados
            // =========================================================================
            initialValues={{
              nombre: "",
              correo: "",
              mensaje: "",
            }}
            // fin de configuracion de valores predeterminados
            // ==================================================================

            // inicio para validar formulario

            // ====================================================================

            validate={(valores) => {
              let errores = {};

              // validacion nombre
              if (!valores.nombre) {
                errores.nombre = "¡por favor ingresa un texto!";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "¡el nombre solo puede contener letras y espacios!";
              }

              // validacion correo

              if (!valores.correo) {
                errores.correo = "¡por favor ingresa un correo electrónico!";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "¡el correo electronico solo debe contener letras, número, puntos, guiones y guión bajo!";
              }

              if (!valores.mensaje) {
                errores.mensaje =
                  "¡por wfavor ingresa contenido en el mensaje!";
              }

              return errores;
            }}
            // ===============================FIN========================================

            // inicio para el envio del formulario, dentro de el esta el envio de correo
            // ============================================================================
            onSubmit={(values, { resetForm }) => {
              console.log("Formulario Enviado");
              console.log(values);
              cambiarFormularioEnviado(true);
              setTimeout(() => {
                cambiarFormularioEnviado(false);
              }, 4000);

              // reinicio del formulario al enviarlo
              resetForm();

              // utilizamos emailjs  Envio mensaje al correo.
              /* el send tiene 4 parametros:
              1.) Es el servicio se encuentra en la pagina emailjs. service_4lalpx5
              2.)Template del mensaje:
                  nos dirijimos a emailjs y vamos a la opcion email templates.
                  presionamos create new template.
                  copiamos en setting el template id y es el segundo parametro.
              3.) Es el formulario,, como lo capturamos?
                  como un objeto {name_input : values.name_input}
                
              4.) Es el user ID.
                  en emailjs buscamos integration.
                  y ahi vemos un userId para nosotros lo copiamos.
          */

              emailjs
                .send(
                  "service_4lalpx5",
                  "template_nux5q41",
                  {
                    nombre: values.nombre,
                    correo: values.correo,
                    mensaje: values.mensaje,
                  },
                  "c3n7CcXg8nLcIrnv_"
                )
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
              // fin configuracion envio de mensaje correo
            }}
          >
            {({
              handleSubmit,
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <form action="" className="form-mail" onSubmit={handleSubmit}>
                {console.log(errors)}
                {/* input name */}
                <div className="contenido-input-principal">
                  <div className="contenido_input">
                    <label htmlFor="nombre">
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Ingresa su nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    <p className="contenido-error">
                      {touched.nombre && errors.nombre && (
                        <div className="error">{errors.nombre}</div>
                      )}
                    </p>
                  </div>

                  {/* input email */}
                  <div className="contenido_input">
                    <label htmlFor="correo">
                      {" "}
                      <input
                        type="email"
                        name="correo"
                        id="correo"
                        placeholder="ejemplo@ejemplo.com"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    <p className="contenido-error">
                      {touched.correo && errors.correo && (
                        <div className="error">{errors.correo}</div>
                      )}
                    </p>
                  </div>
                </div>

                {/* input message */}
                <div className="contenido_input_texarea">
                  <label htmlFor="mensaje">
                    {" "}
                    <textarea
                      type="text"
                      name="mensaje"
                      id="mensaje"
                      cols="80"
                      rows="8"
                      placeholder="Ingresa su mensaje."
                      value={values.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {touched.mensaje && errors.mensaje && (
                      <div className="error">{errors.mensaje}</div>
                    )}
                  </label>
                </div>
                <div className="contenido-boton">
                  <button type="submit">
                    Enviar <i class="far fa-paper-plane"></i>
                  </button>
                  <p className="contenido-error">
                    {/* realizamos el mensaje de envio de formulario */}
                    {formularioEnviado && (
                      <p className="exito">Mensaje enviado con éxito</p>
                    )}
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
