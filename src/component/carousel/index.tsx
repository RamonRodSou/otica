import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.scss';
import { Box, Typography } from '@mui/material';

interface image {
    id: number;
    image: string;
    alt: string;
}

interface Props {
    titulo: string;
    subtitulo: string;
    image:image[];

}


export default function Carousel({titulo, subtitulo, image}: Props) {
    return (
        <Box className="carousel">
            <Typography variant="h2" component="h2" className="title">
                {titulo}
            </Typography>
            
            <Typography variant="body1" className="subtitle">
                {subtitulo}
            </Typography>

            <Box className="card">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ 
                        delay: 5000, 
                        disableOnInteraction: false 
                    }}
                    className="mySwiper"
                >
                    {image.map((it) => (
                        <SwiperSlide key={it.id}>
                            <Box className="image_container">
                                <img 
                                    src={it.image} 
                                    alt={it.alt} 
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}