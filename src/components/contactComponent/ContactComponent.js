import "./ContactComponent.css";

/*=====================================================*/
//Importamos la libreria para armar el formulario formik
import { Formik } from "formik";

/*=========================================*/
//importamos la libreria para enviar los mensajes al correo
import emailjs from "@emailjs/browser";

export const ContactComponent = () => {
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
            initialValues={{
              name_input: "Registra su nombre",
              email_input: "ejemplo@ejemplo.com",
              message_input: "Ingresa el mensaje",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log("Formulario Enviado");
              console.log(values);
              resetForm();

              /*===================================================================*/
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
                    name_input: values.name_input,
                    email_input: values.email_input,
                    message_input: values.message_input,
                  },
                  "c3n7CcXg8nLcIrnv_"
                )
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
              // fin configuracion envio de mensaje correo
              /*==============================================================================*/
            }}
          >
            {({ handleSubmit, values, handleChange, handleBlur }) => (
              <form action="" className="form-mail" onSubmit={handleSubmit}>
                {/* input name */}
                <div className="contenido-input-principal">
                  <div className="contenido_input">
                    <label htmlFor="name_input">
                      <input
                        type="text"
                        name="name_input"
                        id="name_input"
                        placeholder="Ingresa su nombre"
                        value={values.name_input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                  </div>

                  {/* input email */}
                  <div className="contenido_input">
                    <label htmlFor="email_input">
                      {" "}
                      <input
                        type="email"
                        name="email_input"
                        id="email_input"
                        placeholder="ejemplo@ejemplo.com"
                        value={values.email_input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                  </div>
                </div>

                {/* input message */}
                <div className="contenido_input_texarea">
                  <label htmlFor="message_input">
                    {" "}
                    <textarea
                      type="text"
                      name="message_input"
                      id="message_input"
                      cols="91"
                      rows="15"
                      placeholder="Ingresa su mensaje."
                      value={values.message_input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </label>
                </div>
                <div className="contenido-boton">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
