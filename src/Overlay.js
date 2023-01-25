import React, { forwardRef } from "react"
import fotoRodri from "./media/rori.jpg"
import fotoMario from "./media/mario.png"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div id="gemdam" style={{ height: "400vh" }}>
      <div class="dot">
        <h1> GEMDAM </h1>
        Creamos soluciones útiles, creativas e innovadoras que resuelvan todo tipo de problemas y se ajusten a tus requisitos.
      </div>
    </div>
    <div id="nosotros" style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Nosotros</h1>
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
        <br></br>
        <img className="foto-founder" width={100} height={100} src={fotoMario} />

        <h3>Mario Hinostroza</h3>
        CO-FOUNDER & CEO <br></br>
        Programador, diseñador multimedia,
        tester de videojuegos y un estratega
        en la tecnología para mejorar la experiencia de vida

        <br></br><br></br>

        <img className="foto-founder" width={100} height={100} src={fotoRodri} />

        <h3>Rodrigo Isasmendi</h3>
        CO-FOUNDER & 3D ARTIST <br></br>
        Programador, diseñador multimedia,
        tester de videojuegos y un estratega
        en la tecnología para mejorar la experiencia de vida
      </div>
    </div>
    <div id="aumented" style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Augmented Reality</h1>
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
        La realidad virtual es un entorno digital inmersivo en el cual podemos sumergirnos a través de cascos o gafas de realidad virtual y la ayuda de otros dispositivos,
        para vivir experiencias únicas, al igual que simulaciones de entornos y situaciones hasta donde llegue tu imaginación. Es un nuevo medio
        para la creación de contenido y un nuevo canal de comunicación, por lo que es una opción nueva e ideal para la optimización de las comunicaciones tanto internas
        como externas de una empresa,facilitando el desarrollo de actividades, además de reducir sus tiempos y costos.
        <br></br><br></br>
        Esta tecnología se encuentra disponible en una amplia variedad de plataformas que se adaptan a la necesidad de cada cliente.
        <br></br><br></br>¿Cuál es ideal para tu negocio?

      </div>
    </div>
    <div id="desarrollos-web" style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Desarrollo Web</h1>
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
        para aumentar sus ventas.
      </div>
    </div>
    <div id="conctacto" style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Contacto</h1>
        <br></br>
        <input className="input-contacto" placeholder="Nombre y apellido" /> <br></br><br></br>
        <input className="input-contacto" placeholder="Correo electrónico" /> <br></br><br></br>
        <input className="input-contacto" placeholder="Empresa" /> <br></br><br></br>
        <input className="input-contacto" placeholder="Asunto" /> <br></br><br></br>
        <textarea className="input-contacto area" placeholder="Mensaje" ></textarea> <br></br><br></br>

        <div className="copyright">
          © 2023, GEMDAM STUDIO. Todos los derechos reservados.
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
        <a href="#desarrollos-web+" className="hoverUnderlineAnim">Web</a> <br></br>
        <a href="#conctacto" className="hoverUnderlineAnim">Contacto</a> <br></br>
      </div>
    </div>

  </div>
))

export default Overlay
