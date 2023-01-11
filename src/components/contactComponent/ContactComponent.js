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

      <Formik
        initialValues={{
          name_input: "Registra su nombre",
          email_input: "ejemplo@ejemplo.com",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Formulario Enviado");
          console.log(values);
          resetForm();
          setTimeout(() => {
            emailjs
              .send(
                "service_4lalpx5",
                "template_nux5q41",
                {
                  name_input: values.name_input,
                  email_input: values.email_input,
                },
                "c3n7CcXg8nLcIrnv_"
              )
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
          }, 1000);
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur }) => (
          <form action="" className="form-mail" onSubmit={handleSubmit}>
            {/* input name */}
            <div>
              <label htmlFor="name_input">Nombre: </label>
              <input
                type="text"
                name="name_input"
                id="name_input"
                placeholder="Ingresa su nombre"
                value={values.name_input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {/* input email */}
            <div>
              <label htmlFor="email_input">Email:</label>
              <input
                type="email"
                name="email_input"
                id="email_input"
                placeholder="ejemplo@ejemplo.com"
                value={values.email_input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            {/* input message */}
            {/* <div>
              <label htmlFor="user_message">Mensaje:</label>
              <textarea
                name="user_message"
                id="user_message"
                cols="30"
                rows="10"
                placeholder="Ingresa su mensaje."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div> */}

            <button type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
