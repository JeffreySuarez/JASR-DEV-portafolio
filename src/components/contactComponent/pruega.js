// {
//   /* ingresamos dentro del componente formik todo el formulario */
// }
// {
//   /* ======================================================================== */
// }
// <Formik>
//   {/* aca no termina todo hay que crear una funcion y dentro de la funcion metemos el formulario para renderizarlo (rendered prop)*/}
//   {/* on submit validamos si al precionar el button envia el formulario con el mensaje console.log */}
//   onSubmit =
//   {(e) => {
//     console.log("Formulario Enviado");
//     e.preventDefault();

//     /*===================================================================*/
//     // utilizamos emailjs  Envio mensaje al correo.
//     /* el sendForm tiene 4 parametros:
//     1.) Es el servicio se encuentra en la pagina emailjs. service_4lalpx5
//     2.)Template del mensaje:
//         nos dirijimos a emailjs y vamos a la opcion email templates.
//         presionamos create new template.
//         copiamos en setting el template id y es el segundo parametro.
//     3.) Es el formulario,, como lo capturamos?
//         e.target .
//     4.) Es el user ID.
//         en emailjs buscamos integration.
//         y ahi vemos un userId para nosotros lo copiamos.
//   */

// emailjs
//   .sendForm(
//     "service_4lalpx5",
//     "template_nux5q41",
//     e.target,
//     "c3n7CcXg8nLcIrnv_"
//   )
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

//   fin configuracion envio de mensaje correo<
//     /*==============================================================================*/
//   }}
//   {/* definimos los valores iniciales del formulario */}
//   {/* initialValues=
//         {{
//           user_name: "Ingresa su nombre",
//           user_email: "ejemplo@ejemplo.com",
//         }} */}
//   {({ handleSubmit }) => (
//     <form action="" className="form-mail" onSubmit={handleSubmit}>
//       {/* input name */}
//       <div>
//         <label htmlFor="user_name">Nombre: </label>
//         <input
//           type="text"
//           name="user_name"
//           id="user_name"
//           placeholder="Ingresa su nombre"
//         />
//       </div>

//       {/* input email */}
//       <div>
//         <label htmlFor="user_email">Email:</label>
//         <input
//           type="email"
//           name="user_email"
//           id="user_email"
//           placeholder="ejemplo@ejemplo.com"
//         />
//       </div>

//       {/* input message */}
//       <div>
//         <label htmlFor="user_message">Mensaje:</label>
//         <textarea
//           name="user_message"
//           id=""
//           cols="30"
//           rows="10"
//           placeholder="Ingresa su mensaje."
//         ></textarea>
//       </div>

//       <button type="submit">Enviar</button>
//     </form>
//   )}
// </Formik>;
// {
//   /* ========================================================================= */
// }
