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

export default function ModalAr(props) {

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
                            <h1 className='tittle'>Augmented Reality</h1>
                            <a className='button-close' href='#aumented' onClick={(e) => modelito(false)}> <GrClose /> </a>
                        </div>
                        <div className='container-multimedia'>
                            <div className='info'>
                                <div>
                                    <p>La realidad aumentada permite a los usuarios experimentar su entorno
                                        de una manera más eficiente y única, recibiendo y brindando información relevante
                                        sobre los alrededores en un ida y vuelta en tiempo real, con infinitas posibilidades
                                        de interacciones que nos permitan una comunicación con el entorno
                                        y una exploración de su contenido.
                                    </p>

                                    {mobile == true ?
                                        <div className='media-slide'>
                                            <Swiper
                                                pagination={true}
                                                slidesPerView={1}
                                                spaceBetween={10}
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

                                    <p>
                                        La <b>realidad aumentada</b> tiene infinidad de <b>aplicaciones</b> con las que se
                                        innova día tras día y se logra llevar <b>proyectos</b> y <b>empresas</b> a un mayor
                                        desempeño.
                                    </p>
                                    <p>
                                        La <b>principal ventaja</b> de la <b>realidad aumentada</b> yace en la facilidad
                                        que ésta otorga para el intercambio de información entre sus usuarios, ya sea entre
                                        la empresa y sus trabajadores, o hacia los clientes, ya que permite la <b>visualización</b>
                                        de información en tiempo real sobre el mismo entorno, facilitando tareas, explicaciones
                                        y procesos de comunicación.
                                    </p>
                                    <p>
                                        Esta <b>tecnología</b> crea un nuevo canal de comunicación donde los clientes pueden
                                        interactuar en <b>tiempo real</b> con sus productos, servicios y experiencias que serán
                                        recordadas con mayor facilidad por los clientes y crearán mayor conexión debido
                                        a su <b>inmersividad</b> y <b>originalidad</b>.
                                    </p>
                                    <br></br><br></br>
                                    <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Quiero contactarme </a>
                                    <br></br>
                                </div>

                                {mobile == true ?
                                    <div className='media-slide'>
                                        <Swiper
                                            pagination={true}
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            loop={true}
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 1500,
                                            }}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/arrr_jnjlh3.webp" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/ar33_qqnr15.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/ar2_vjirdy.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    : ''
                                }

                                <div>
                                    <p><b> Desarrollo a medida </b></p>
                                    <p>
                                        Realizamos un desarrollo de proyectos y productos a medida de nuestros clientes,
                                        empezando por escuchar sus requerimientos, que ideas proyectan, en qué situación
                                        se encuentran y con qué herramientas disponen, para así poder encontrar insights
                                        que nos permitan enfocarnos de la mejor manera.
                                    </p>
                                    <p>
                                        Luego de aprovechar la comunicación
                                        con nuestros clientes al máximo, comenzamos una etapa de análisis y planificación
                                        con el fin de alinearnos a los requisitos del cliente y llegar a un acuerdo que
                                        nos permita proporcionarle un producto acabado, que sea la mejor herramienta para
                                        el crecimiento de su empresa.
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/HighresScreenshot001300_tt9xmz.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996659/GEMDAM/VR%20MEDIA/NewLevelSequence.00001_b3ywn0.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996658/GEMDAM/VR%20MEDIA/NewLevelSequence.00002_fqp7rq.jpg" /> </SwiperSlide>
                                        </Swiper>                                </div>
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

                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/arrr_jnjlh3.webp" /> </SwiperSlide>
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/ar33_qqnr15.jpg" /> </SwiperSlide>
                                                <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680044250/GEMDAM/AR%20MEDIA/ar2_vjirdy.jpg" /> </SwiperSlide>
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680048320/GEMDAM/AR%20MEDIA/ar454545_g1mpu5.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680048917/GEMDAM/AR%20MEDIA/ar6676_juhvgy.webp" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680048649/GEMDAM/AR%20MEDIA/ar6677_pybnub.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    {/* <div className='media-slide'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
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
                                    </div> */}
                                </div> : ''
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
