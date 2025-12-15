import { Box, Typography } from '@mui/material';
import './styles.scss';
import Carousel from '../carousel';
import { oculosFemininoImage, oculosInfantilImage, oculosMascolinoImage } from './oculosImage';

export default function Produto() {

    return (
        <Box className="produto">
            <Box className="infor">
                <Typography variant='h3' className='title'>
                    Qualidade e diversidade que transformam seu visual!
                </Typography>
            </Box>
            <Box className="items">
                <Carousel 
                    image={oculosMascolinoImage}
                    titulo='Óculos Masculino'
                    subtitulo='Precisão e estilo para cuidar da sua visão diariamente.'
                />
                <Carousel 
                    image={oculosFemininoImage}
                    titulo='Óculos Feminino'
                    subtitulo='Praticidade e versatilidade com lentes para dia e noite.'
                />
                <Carousel 
                    image={oculosInfantilImage}
                    titulo='Óculos Infantis'
                    subtitulo='Conforto e segurança em óculos feitos para os pequenos.'
                />
            </Box>
        </Box>
    )
}