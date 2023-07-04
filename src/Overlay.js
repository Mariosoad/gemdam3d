import React, { forwardRef } from "react"
import fotoRodri from "./media/rori.jpg"
import fotoMario from "./media/mario.png"
import { toast } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { RxDoubleArrowDown } from 'react-icons/rx';

let mensajeFormulario = false;
function enviarMail(data) {

  axios.post("https://gemdam.com/webApi/public/contacto", data)
    .then(function (response) {
      console.log(response.data);
      if (response.data.message == "email Enviado!") {
        //mensajeFormulario = true;
        toast('Mensaje enviado!', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      // mensajeFormulario = true;
      // setTimeout(() => {
      //   mensajeFormulario = false;
      // }, 6000);
    })
  // .catch(function (error) {
  //   console.log(error);
  //    mensajeFormulario = false;
  // });
}

function Formulario() {

  // ENVIAR FORMULARIO
  const locale = {
    noResultsText: "No existen resultados",
    placeholder: "",
    searchPlaceholder: "Buscar...",
    checkAll: "",
    yesterday: "Ayer",
    today: "Hoy",
    dateLocale: "es_AR",
  };
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    enviarMail(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container-form">

        <Controller
          name="nombre"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              autocomplete="off"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Nombre y apellido"
              inputRef={ref}
            />
          )}
        />
        {errors.nombre && (<p className="error">Campo requerido.</p>)}

        <Controller
          name="telefono"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              type="number"
              autocomplete="off"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Teléfono"
              inputRef={ref}
            />
          )}
        />
        {errors.telefono && (<p className="error">Ingrese su teléfono.</p>)}

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              type="email"
              autocomplete="off"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Correo electrónico"
              inputRef={ref}
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i
              })}
            />
          )}
        />
        {errors.email && (<p className="error">Ingrese un email.</p>)}

        <Controller
          name="empresa"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              autocomplete="off"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Empresa"
              inputRef={ref}
            />
          )}
        />
        {errors.empresa && (<p className="error">Campo requerido.</p>)}

        <Controller
          name="asunto"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              autocomplete="off"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Asunto"
              inputRef={ref}
            />
          )}
        />
        {errors.asunto && (<p className="error">Ingrese su consulta.</p>)}

        <Controller
          name="mensaje"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <textarea
              autocomplete="off"
              className="input-contacto area"
              {...field}
              locale={locale}
              placeholder="Mensaje"
              inputRef={ref}
            ></textarea>
          )}
        />
        {errors.mensaje && (<p className="error">Campo requerido.</p>)}
        <br></br>


        {/* {mensajeFormulario == true ?
          <div className="container-enviar">
            <p className="subtittle"> Mensaje enviado! </p>
          </div>
          : */}
        <div className="container-enviar">
          <button className="button-enviar" type="submit" > Enviar </button>
        </div>

      </form>
    </>
  )
}

const Overlay = forwardRef(({ caption, scroll }, ref) => (

  <div ref={ref} onScroll={(e) => {
    scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    // caption.current.innerText = scroll.current.toFixed(2)
  }}
    className="scroll">

    <div>
      <div id="gemdam" style={{ height: "400vh" }}>
        <div class="dot">
          <h1 className="tittle-gemdam"> GEMDAM </h1>
          <br></br>
          <p className="subtittle">Creamos soluciones útiles, creativas e innovadoras que resuelvan todo
            tipo de problemas y se ajusten a tus requisitos.</p>
        </div>
      </div>
      <div id="nosotros" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Nosotros</h1>
          <br></br><br></br>
          <p>Nuestro equipo multidisciplinario de profesionales está enfocado en llevar a cabo soluciones
            tecnológicas innovadoras, que contribuyan a crear un futuro digital y cognitivo. </p>
        </div>
      </div>
      <div id="team" style={{ height: "200vh" }}>
        <div class="dot">
          <h1> Team </h1>
          <br></br><br></br>

          <div className="container-team">
            <div>
              <img className="foto-founder" width={100} height={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1674752608/GEMDAM/mario_vvix9l.png" />
              <a target="_blank" href="https://www.linkedin.com/in/mario-hinostroza/">
                <h3>Mario Hinostroza <br></br> <b>CEO</b> <br></br> <b>DEVELOPER</b> </h3></a>
              Programador, diseñador multimedia,
              tester de videojuegos.
            </div>

            <div>
              <img className="foto-founder" width={100} height={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1674752609/GEMDAM/rori_mzbthw.jpg" />
              <a target="_blank" href="https://www.linkedin.com/in/rodrigoisasmendi/"> <h3>Rodrigo Isasmendi <br></br> <b>CO-FOUNDER</b> <br></br> <b>ENVIRONMENT ARTIST</b></h3></a>
              Diseñador multimedia, environment artist y diseñador de experiencias.
            </div>
          </div>
        </div>
      </div>
      <div id="aumented" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Augmented Reality</h1>
          <br></br><br></br>
          La realidad aumentada es la superposición de elementos
          visuales virtuales sobre el mundo real de manera contextualizada,
          a través de la tecnología y el uso de una amplia gama de dispositivos
          mayormente móviles.
        </div>
      </div>
      <div id="virtual" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Virtual Reality</h1>
          <br></br>
          <p>La realidad virtual es una tecnología innovadora, un nuevo medio para la creación de contenido y
            un nuevo canal de comunicación, por lo que es una opción nueva e ideal para la optimización de las
            comunicaciones tanto internas como externas de una empresa, facilitando el desarrollo de actividades,
            además de reducir sus tiempos y costos.</p>
          {/* <p><b>¿Cuál es tu idea para tu negocio?</b></p> */}
        </div>
      </div>
      {/* DESARROLLO WEB */}
      <div id="desarrollos-web" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Desarrollo Web</h1>
          <br></br>
          <p> A partir de un desarrollo web a medida puedes diferenciar y colocar tu empresa
            en una posición de ventaja respecto a la competencia, y optimizar la obtención de beneficios.</p>
        </div>
      </div>
      <div id="contacto" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Contacto</h1>
          <br></br>
          <Formulario />
        </div>
      </div>
    </div>

    {/* <span class="caption" ref={caption}>
      0.00
    </span> */}


    <div className="container-copyright">
      <div className="copyright">
        ©2023
      </div>
    </div>

    <div class="caption" >
      <div className="enlace-pages">
        <a href="#gemdam" className="hoverUnderlineAnim">Home</a> <br></br>
        <a href="#nosotros" className="hoverUnderlineAnim">Nosotros</a> <br></br>
        <a href="#team" className="hoverUnderlineAnim">Team</a> <br></br>
        <a href="#aumented" className="hoverUnderlineAnim">AR</a> <br></br>
        <a href="#virtual" className="hoverUnderlineAnim">VR</a> <br></br>
        <a href="#desarrollos-web" className="hoverUnderlineAnim">Web</a> <br></br>
        <a href="#contacto" className="hoverUnderlineAnim">Contacto</a> <br></br>
      </div>
    </div>

    {scroll.current < 0.05 ?
      <div className="scroll-to-view">
        <p>Scroll para continuar</p>
        <RxDoubleArrowDown />
      </div> : ''
    }

  </div>
))

export default Overlay
