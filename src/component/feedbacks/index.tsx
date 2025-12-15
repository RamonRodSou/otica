import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { feedbacks } from './feedbacks';
import { Box, Card, Rating, Typography } from '@mui/material';
import Botao from '../botao';

export default function Feedback() {
    return (
        <Box className="feedback">
            <Box className="infor">
                <Typography variant="h2" component="h2" className="title">
                    Histórias reais de clientes satisfeitos com nossos óculos e atendimento!
                </Typography>
                
                <Typography variant="body1" className="subtitle">
                    Descubra como impactamos positivamente a vida de quem confia em nossos serviços. Veja depoimentos e sinta-se seguro para escolher o melhor!
                </Typography>
            </Box>

            <Box className="card">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20} 
                    loop={true}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ 
                        delay: 5000, 
                        disableOnInteraction: false 
                    }}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {feedbacks.map((it) => (
                        <SwiperSlide key={it.id}>
                            <Card className="card-infor">
                                <Box className="infor">
                                    <Typography variant='body1' className="nome-cliente">
                                        {it.nome}
                                    </Typography>
                                    <Rating 
                                        name="read-only" 
                                        value={5}
                                        readOnly
                                        sx={{
                                            color: '#faaf00',
                                            fontSize: '1rem',
                                            mb: 1
                                        }}
                                    />
                                    <Typography variant='body1' className='feeback-cliente'>
                                        {it.descricao}
                                    </Typography>
                                </Box>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Botao/>
        </Box>
    );
}