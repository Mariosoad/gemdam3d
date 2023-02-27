import React from 'react'

import "./Modal.css"

export default function ModalInfo(props) {

    const modelito = props.setShowComponent;
    const handleClose = (e) => {
        modelito(false);
    };

    return (
        <>
            <div className='container-info'>
                <div class="text">
                    <div className='container-title'>
                        <h1 className='tittle'>Nosotros 111</h1>
                        <button onClick={(e) => modelito(false)}>Close</button>
                    </div>
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
        </>
    )
}
