import React from 'react'
import { GrClose } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive'


export default function ModalWeb(props) {

    const modelito = props.setShowComponent;
    const mobile = useMediaQuery({ query: '(max-width: 700px)' })
    const handleClose = (e) => {
        modelito(false);
    };
    console.log(mobile)
    return (
        <>
            <div className='container-info'>
                <div class="text">
                    <div className='container-title'>
                        <h1 className='tittle'>Desarrollo Web</h1>
                        <a className='button-close' href='#desarrollos-web' onClick={(e) => modelito(false)}> <GrClose /> </a>
                    </div>
                    <br></br><br></br>
                    <div className='container-multimedia'>

                        <div className='info'>
                            <div>
                                <p><b>Desarrollo Web</b></p>
                                <p>Realizamos webs autoadministrables ajustadas a la necesidad de cada cliente.</p>

                                <p><b>Web Design</b></p>
                                <p>Contamos con servicio de diseño gráfico, para que nuestros clientes puedan desarrollar
                                    al máximo su negocio, logrando identidades potentes para aumentar su ventajas en el mercado.</p>

                                <p><b>Programación a medida</b></p>
                                <p>Trabajamos con programación a medida con el fin de lograr soluciones en función de las
                                    necesidades presentadas por nuestros clientes.</p>

                                <p><b>Consultoria en comunicación digital</b></p>
                                <p>Trabajamos codo a codo con nuestros clientes para lograr una estrategia de comunicación
                                    eficiente, acorde a las necesidades de cada negocio.</p>

                                <br></br>
                                <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Quiero más información! </a>
                            </div>

                            {mobile == true ?
                                <div className='media'>
                                    <img className='img-style' width={350} height={450} src='https://res.cloudinary.com/deushkfkk/image/upload/v1678140783/GEMDAM/dev-web_iu3ha5.jpg' />
                                </div>
                                : ''
                            }

                            <div>
                                <p><b>Beneficio para tu empresa</b></p>
                                <ul>
                                    <li>Mejor posicionamiento en el mercado, con una presencia diferencial respecto a la competencia.</li><br></br>
                                    <li>Un diseño web destacable ayuda a la construcción de una identidad de marca fuerte.</li><br></br>
                                    <li>El servicio y sus procesos se adaptan a los requerimientos específicos de tu organización.</li><br></br>
                                    <li>Mejor optimización de la usabilidad de la web, acorde a su preferencia.</li>
                                </ul>

                                <br></br>
                                <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Quiero más información! </a>
                                <br></br>
                            </div>

                        </div>
                        <div className='container-media'>
                            <div className='media'>
                                {mobile == false ?
                                    <img className='img-style' width={350} height={450} src='https://res.cloudinary.com/deushkfkk/image/upload/v1678140783/GEMDAM/dev-web_iu3ha5.jpg' />
                                    : ''
                                }

                            </div>
                            <div className='media'>
                                <img className='img-style' width={350} height={450} src='https://res.cloudinary.com/deushkfkk/image/upload/v1678141521/GEMDAM/woman-dev-web_khigbe.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
