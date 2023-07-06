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
import "./Modal.css"
import { Mousewheel, Pagination } from "swiper";

export default function ModalWeb(props) {

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
                            <h1 className='tittle'>Desarrollo Web</h1>
                            <a className='button-close' href='#desarrollos-web' onClick={handleClose}> <GrClose /> </a>
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055666/GEMDAM/DEV%20WEB%20MEDIA/finger-pointing-at-javascript-code_lxva3k.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/sticky-note-to-ship-code_df4zgt.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/software-programming-plan_jgqkq8.jpg" /> </SwiperSlide>
                                        </Swiper>
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680059756/GEMDAM/DEV%20WEB%20MEDIA/eftakher-alam-i1VQZsU86ok-unsplash_cndmqa.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680059757/GEMDAM/DEV%20WEB%20MEDIA/ux-indonesia-qC2n6RQU4Vw-unsplash_lkgjbh.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/designer-drawing-website-mockup_qhqkwv.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div> : ''
                                }

                            </div>


                            {mobile == false ?
                                <div className='container-media-slide'>
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055666/GEMDAM/DEV%20WEB%20MEDIA/finger-pointing-at-javascript-code_lxva3k.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/sticky-note-to-ship-code_df4zgt.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/software-programming-plan_jgqkq8.jpg" /> </SwiperSlide>
                                        </Swiper>
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680059756/GEMDAM/DEV%20WEB%20MEDIA/eftakher-alam-i1VQZsU86ok-unsplash_cndmqa.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680059757/GEMDAM/DEV%20WEB%20MEDIA/ux-indonesia-qC2n6RQU4Vw-unsplash_lkgjbh.jpg" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1680055665/GEMDAM/DEV%20WEB%20MEDIA/designer-drawing-website-mockup_qhqkwv.jpg" /> </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                : ''
                            }
                            {/* 
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
                            </div>*/}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
