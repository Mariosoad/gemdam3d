import React, { useRef, useState } from "react";
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

export default function ModalNosotros(props) {

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
                        <h1 className='tittle'>Nosotros</h1>
                        <a className='button-close' href='#nosotros' onClick={(e) => modelito(false)}> <GrClose /> </a>
                    </div>

                    <br></br><br></br>
                    <div className='container-multimedia'>

                        <div className='info'>
                            <div>
                                <p>
                                    Somos una compañía dinámica y experta en la creación de experiencias digitales que busca transformar
                                    la comunicación estratégica dentro de las empresas y en relación con sus clientes, para dar un salto
                                    de calidad en el ámbito cognitivo. Para esto desarrollamos propuestas capaces de mejorar los resultados
                                    comerciales de cada marca y su relevancia, mediante un mejor posicionamiento en el mercado y un crecimiento
                                    de valor a lo largo de su ciclo de vida.
                                </p>
                            </div>

                            <div>
                                <a href='#contacto' className="button-enviar button-form" onClick={(e) => modelito(false)}> Contanos tu idea! </a>
                            </div>

                            {mobile == true ?
                                <div className='media-slide'>
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
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00001_rm0kfu.png" /> </SwiperSlide>
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00003_sugqd6.png" /> </SwiperSlide>
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot000020_myffdy.png" /> </SwiperSlide>
                                    </Swiper>
                                </div>
                                : ''
                            }

                            <div>
                                <p><b>Respeto</b></p>
                                <p>
                                    Valoramos la diversidad en un entorno abierto e inclusivo donde fomentamos la confianza y el trato respetuoso hacia cada individuo.
                                </p>

                                <p><b>Integridad</b></p>
                                <p>
                                    Buscamos generar lazos de confianza a través de éticas sólidas y honestas, comunicándonos de manera clara y tomando responsabilidad por nuestras acciones.
                                </p>
                                <p><b>Valor</b></p>
                                <p>
                                    Ayudamos a nuestros clientes a establecerse como grandes empresas de valor y relevancia, capaces de crear relaciones fructíferas a largo plazo.
                                </p>
                                <p><b>Compromiso</b></p>
                                <p>
                                    Acompañamos cada proyecto desde su inicio, partiendo de etapas de asesoramiento y desarrollo, hasta su lanzamiento, estando presentes a cada momento para brindar respuestas eficaces.
                                </p>
                            </div>

                        </div>
                        {mobile == false ?
                            <div className='container-media-slide'>
                                <div className='media-slide'>
                                    {mobile == false ?
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
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00001_rm0kfu.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot00003_sugqd6.png" /> </SwiperSlide>
                                            <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996663/GEMDAM/VR%20MEDIA/HighresScreenshot000020_myffdy.png" /> </SwiperSlide>
                                        </Swiper>
                                        : ''
                                    }

                                </div>
                                <div className='media-slide'>
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
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996662/GEMDAM/VR%20MEDIA/HighresScreenshot00000_ypxoea.png" /> </SwiperSlide>
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996661/GEMDAM/VR%20MEDIA/HighresScreenshot00005_pocrga.png" /> </SwiperSlide>
                                        <SwiperSlide> <img className="img-vr" width={100} src="https://res.cloudinary.com/deushkfkk/image/upload/v1678996660/GEMDAM/VR%20MEDIA/NewLevelSequence.0000_v03zp0.jpg" /> </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
