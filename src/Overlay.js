import React, { useState, forwardRef } from "react"
import fotoRodri from "./media/rori.jpg"
import fotoMario from "./media/mario.png"
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { RxDoubleArrowDown } from 'react-icons/rx';

var mensajeFormulario = false;

function enviarMail(data) {

  axios.post("https://gemdam.com/webApi/public/contacto", data)
    .then(function (response) {
      console.log(response.data);
      mensajeFormulario = true;
      setTimeout(() => {
        mensajeFormulario = false;
      }, 6000);
    })
    .catch(function (error) {
      console.log(error);
      mensajeFormulario = false;
    });
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
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Nombre y apellido"
              inputRef={ref}
            />
          )}
        />
        {errors.nombre && (<p className="error">Campo requerido</p>)}

        <Controller
          name="telefono"
          type="number"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Teléfono"
              inputRef={ref}
            />
          )}
        />
        {errors.telefono && (<p className="error">Campo requerido</p>)}

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              type="email"
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Correo electrónico"
              inputRef={ref}
            />
          )}
        />
        {errors.email && (<p className="error">Campo requerido</p>)}

        <Controller
          name="empresa"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Empresa"
              inputRef={ref}
            />
          )}
        />
        {errors.empresa && (<p className="error">Campo requerido</p>)}

        <Controller
          name="asunto"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <input
              className="input-contacto"
              {...field}
              locale={locale}
              placeholder="Asunto"
              inputRef={ref}
            />
          )}
        />
        {errors.asunto && (<p className="error">Campo requerido</p>)}

        <Controller
          name="mensaje"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <textarea
              className="input-contacto area"
              {...field}
              locale={locale}
              placeholder="Mensaje"
              inputRef={ref}
            ></textarea>
          )}
        />
        {errors.mensaje && (<p className="error">Campo requerido</p>)}
        <br></br>


        {mensajeFormulario == true ?
          <div className="container-enviar">
            <p className="subtittle"> Mensaje enviado! </p>
          </div>
          :
          <div className="container-enviar">
            <button className="button-enviar" type="submit" > Enviar </button>
          </div>
        }
      </form>
    </>
  )
}

const Overlay = forwardRef(({ caption, scroll }, ref) => (

  <div ref={ref} onScroll={(e) => {
    scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    caption.current.innerText = scroll.current.toFixed(2)
  }}
    class="scroll">

    <div>
      <div id="gemdam" style={{ height: "400vh" }}>
        <div class="dot">
          <h1 className="tittle-gemdam"> GEMDAM </h1>
          <br></br><br></br>
          <p className="subtittle">Creamos soluciones útiles, creativas e innovadoras que resuelvan todo
            tipo de problemas y se ajusten a tus requisitos.</p>
        </div>
      </div>
      <div id="nosotros" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Nosotros</h1>
          <br></br><br></br>
          Somos una compañía dinámica y experta en la creación de experiencias digitales que busca transformar la comunicación estratégica dentro de las empresas
          y en relación con sus clientes, para dar un salto de calidad en el ámbito cognitivo. Para esto desarrollamos propuestas capaces de mejorar los resultados
          comerciales de cada marca y su relevancia, mediante un mejor posicionamiento en el mercado y un crecimiento de valor a lo largo de su ciclo de vida.
          <ul>
            <li>Valoramos la diversidad en un entorno abierto e inclusivo donde fomentamos la confianza y el trato respetuoso hacia cada individuo.</li><br></br>
            {/* <li>Buscamos generar lazos de confianza a través de éticas sólidas y honestas, comunicándonos de manera clara y tomando responsabilidad por nuestras acciones.</li> */}
            <li>Ayudamos a nuestros clientes a establecerse como grandes empresas de valor y relevancia, capaces de crear relaciones fructíferas a largo plazo.</li><br></br>
            <li>Acompañamos cada proyecto desde su inicio, partiendo de etapas de asesoramiento y desarrollo, hasta su lanzamiento, estando presentes a cada momento para brindar respuestas eficaces.</li>
          </ul>
        </div>
      </div>
      <div id="team" style={{ height: "200vh" }}>
        <div class="dot">
          <h1> Team </h1>
          <br></br><br></br>

          <img className="foto-founder" width={100} height={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1674752608/GEMDAM/mario_vvix9l.png" />
          <h3>Mario Hinostroza</h3>
          CO-FOUNDER & CEO <br></br>
          Programador, diseñador multimedia,
          tester de videojuegos y un estratega
          en la tecnología para mejorar la experiencia de vida.

          <br></br><br></br>

          <img className="foto-founder" width={100} height={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1674752609/GEMDAM/rori_mzbthw.jpg" />
          <h3>Rodrigo Isasmendi</h3>
          CO-FOUNDER & ENVIRONMENT ARTIST <br></br>
          Diseñador Multimedia, Environment Artist y diseñador de experiencias.
        </div>
      </div>
      <div id="aumented" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Augmented Reality</h1>
          <br></br><br></br>
          La realidad aumentada tiene infinidad de aplicaciones con las que se innova día tras día y se logra llevar proyectos y empresas a un mayor desempeño.
          La principal ventaja de la realidad aumentada yace en la facilidad que ésta otorga para el intercambio de información entre sus usuarios, ya sea entre la empresa y sus trabajadores,
          o hacia los clientes, ya que permite la visualización de información en tiempo real sobre el mismo entorno, facilitando tareas, explicaciones y procesos de comunicación.
          Además esta tecnología crea un nuevo canal de comunicación donde los clientes pueden interactuar en tiempo real con sus productos, servicios y experiencias que serán recordadas
          con mayor facilidad por los clientes y crearán mayor conexión debido a su inmersividad y originalidad.
        </div>
      </div>
      <div id="virtual" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Virtual Reality</h1>
          <br></br><br></br>
          La realidad virtual es un entorno digital inmersivo en el cual podemos sumergirnos a través de cascos o gafas de realidad virtual y la ayuda de otros dispositivos,
          para vivir experiencias únicas, al igual que simulaciones de entornos y situaciones hasta donde llegue tu imaginación. Es un nuevo medio
          para la creación de contenido y un nuevo canal de comunicación, por lo que es una opción nueva e ideal para la optimización de las comunicaciones tanto internas
          como externas de una empresa,facilitando el desarrollo de actividades, además de reducir sus tiempos y costos.
        </div>
      </div>
      {/* DESARROLLO WEB */}
      <div id="desarrollos-web" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Desarrollo Web</h1>
          <br></br><br></br>
          A partir de un desarrollo web a medida puedes diferenciar y colocar tu empresa 
          en una posición de ventaja respecto a la competencia, y optimizar la obtención de beneficios


          {/* <br></br><br></br>
          Trabajamos codo a codo con nuestros clientes
          para lograr la mejor estrategia de comunicación
          acorde a las necesidades del negocio.
          <br></br><br></br>
          Realizamos programación a medida con el fin de
          lograr propuestas en función de las necesidades
          propuestas por nuestros clientes.
          <br></br><br></br>
          Realizamos webs autoadministrables ajustadas a la necesidad de cada cliente.
          <br></br><br></br>
          Contamos con servicio de diseño gráfico, para que nuestros clientes puedan desarrollar al máximo su negocio, logrando identidades potentes
          para aumentar sus ventas. */}

        </div>
      </div>
      <div id="contacto" style={{ height: "200vh" }}>
        <div class="dot">
          <h1>Contacto</h1>
          <br></br><br></br>
          <Formulario />
          <div className="copyright">
            © 2023, GEMDAM STUDIO. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>

    {/* <span class="caption" ref={caption}>
      0.00
    </span> */}

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

    <div className="scroll-to-view">
      <p>Scroll para continuar</p>
      <RxDoubleArrowDown />
    </div>

  </div>
))

export default Overlay
