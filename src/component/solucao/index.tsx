import { Box, Typography } from '@mui/material';
import './styles.scss';
import Carousel from '../carousel';
import Qualidade from '../qualidade';
import { tiposLentes } from './solucao';
import Botao from '../botao';

export default function Solucao() {

    return (
        <Box className="solucao">
            <Box className="infor">
                <Typography variant='h3' className='title'>
                    Tecnologia de ponta para seus olhos
                </Typography>
                <Box className="lentes">
                    {tiposLentes.map((it)=> (
                        <Qualidade 
                            id={it.id}
                            titulo={it.titulo}
                            subtitulo={it.subtitulo}
                        />
                    ))}
                </Box>
                <Botao/>
            </Box>
        </Box>
    )
}