import React, { useRef, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function ModalVR(props) {

    const mobile = useMediaQuery({ query: '(max-width: 700px)' })
    const modelito = props.setShowComponent;
    const valorModal = props.setOpen;

    useEffect(() => {
        document.querySelector("#root").classList.add("modal-activado");
        return () => {
            document.querySelector("#root").classList.remove("modal-activado");
        };
    }, []);

    const handleClose = () => {
        valorModal(false);
        modelito(false);
    }

    return (
        <>
            <Modal show={modelito} onHide={handleClose} animation={false}>
                <div className='container-info'>
                    <div class="text">
                        <div className='container-title'>
                            <h1 className='tittle'>Virtual Reality</h1>
                            <a className='button-close' href='#virtual' onClick={handleClose}> <GrClose /> </a>
                        </div>
                        <div className='container-multimedia'>

                            <div className='info'>
                                <div>
                                    <p>La <b>realidad virtual</b> es un entorno digital inmersivo en el cual podemos sumergirnos a través de cascos o gafas
                                        de <b>realidad virtual</b> y la ayuda de otros dispositivos tecnológicos, para vivir <b>experiencias</b> únicas,
                                        como simulaciones de entornos y situaciones hasta donde llegue el alcance de tu imaginación.
                                        Este entorno digital es construido por un equipo de trabajo conformado por profesionales de
                                        diferentes disciplinas tales como artistas <b>3D</b>, <b>programadores</b> y <b>diseñadores</b>, que en conjunto buscarán
                                        lograr la mejor calidad, la mayor inmersión y la más óptima funcionalidad en cada experiencia.
                                    </p>
                                </div>

                                {mobile == true ?
                                    <div className='media-slide'>
                                        <Swiper
                                            pagination={true}
                                            slidesPerView={1}
                                            // spaceBetween={10}
                                            loop={true}
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 1500,
                                            }}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00001_rm0kfu.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00003_sugqd6.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot000020_myffdy.png" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    : ''
                                }

                                <div>
                                    <p><b> Beneficios de empresa </b></p>
                                    <ul>
                                        <li> Facilita el desarrollo de actividades de la empresa reduciendo su costo y tiempo. </li>
                                        <li> Promueve el compromiso y el interés de los empleados y los clientes. </li>
                                        <li> Abre puertas a más oportunidades comerciales a través de un nuevo medio. </li>
                                        <li> Mejora la imagen de la empresa, mostrándola moderna e innovadora. </li>
                                        <li> Posibilita la planificación y ejecución de proyectos nuevos y más ambiciosos. </li>
                                    </ul>
                                    <br></br> <br></br>
                                    <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Quiero contactarme </a>
                                    <br></br><br></br>
                                </div>

                                {mobile == true ?
                                    <div className='media-slide'>
                                        <Swiper
                                            pagination={true}
                                            slidesPerView={1}
                                            // spaceBetween={10}
                                            loop={true}
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 1500,
                                            }}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/HighresScreenshot001300_tt9xmz.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996659/GEMDAM/VR%20MEDIA/NewLevelSequence.00001_b3ywn0.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996658/GEMDAM/VR%20MEDIA/NewLevelSequence.00002_fqp7rq.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    : ''
                                }

                                <div>
                                    <p><b> Desarrollo a medida </b></p>
                                    <p> Partiendo de la actual situación de constante crecimiento y expansión de esta tecnología,
                                        procuramos interiorizar a nuestros clientes sobre qué es la realidad virtual,
                                        aconsejandolos para lograr estar en una misma sintonía y abrir sus mentes a nuevas
                                        posibilidades beneficiosas para sus empresas. A partir del estudio y profundo
                                        entendimiento de las posibilidades que ofrece la realidad virtual, nuestro equipo se
                                        encuentra capacitado para oír a nuestros clientes y traducir sus preocupaciones y
                                        expectativas, plasmandolas en un proyecto idóneo de acuerdo a los requerimientos acordados.
                                    </p>
                                    <br></br> <br></br>
                                    <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Quiero más información! </a>

                                </div>

                                {mobile == true ?
                                    <div className='media-slide'>
                                        <Swiper
                                            pagination={true}
                                            slidesPerView={1}
                                            // spaceBetween={10}
                                            loop={true}
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 1500,
                                            }}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996662/GEMDAM/VR%20MEDIA/HighresScreenshot00000_ypxoea.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996661/GEMDAM/VR%20MEDIA/HighresScreenshot00005_pocrga.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/NewLevelSequence.0000_v03zp0.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    : ''
                                }
                            </div>
                            {mobile == false ?
                                <div className='container-media-slide'>
                                    <div className='media-slide'>
                                        {mobile == false ?
                                            <Swiper
                                                pagination={true}
                                                slidesPerView={1}
                                                // spaceBetween={10}
                                                loop={true}
                                                effect={"fade"}
                                                autoplay={{
                                                    delay: 1500,
                                                }}
                                                modules={[Pagination]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00001_rm0kfu.png" /> </SwiperSlide>
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00003_sugqd6.png" /> </SwiperSlide>
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot000020_myffdy.png" /> </SwiperSlide>

                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/HighresScreenshot001300_tt9xmz.png" /> </SwiperSlide>
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996659/GEMDAM/VR%20MEDIA/NewLevelSequence.00001_b3ywn0.jpg" /> </SwiperSlide>

                                            </Swiper>
                                            : ''
                                        }

                                    </div>
                                    <div className='media-slide'>
                                        <Swiper
                                            pagination={true}
                                            slidesPerView={1}
                                            // spaceBetween={10}
                                            loop={true}
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 1500,
                                            }}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996662/GEMDAM/VR%20MEDIA/HighresScreenshot00000_ypxoea.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996661/GEMDAM/VR%20MEDIA/HighresScreenshot00005_pocrga.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/NewLevelSequence.0000_v03zp0.jpg" /> </SwiperSlide>

                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996658/GEMDAM/VR%20MEDIA/NewLevelSequence.00002_fqp7rq.jpg" /> </SwiperSlide>

                                        </Swiper>
                                    </div>
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
