import Botao from '../botao';
import './styles.scss';
import { Box, Container, Typography } from '@mui/material';

export default function Lojas() {

    return (
        <Box className="lojas">
            <Box className="infor">
                <Typography variant='h3' className='title'>
                    A Ótica que cuida da sua visão e do seu bolso!
                </Typography>
            </Box>

            <Container className="redes">
                <Box className="infor">
                    <Typography variant='h3' className='title'>
                        + 2.000
                    </Typography>
                    <Typography variant='body2' className='descricao'>
                        modelos de armação
                    </Typography>
                </Box>
                <Box className="infor">
                    <Typography variant='h3' className='title'>
                        + 22
                    </Typography>
                    <Typography variant='body2' className='descricao'>
                        lojas para melhor te atender
                    </Typography>
                </Box>
                <Box className="infor">
                    <Typography variant='h3' className='title'>
                        + 50.000
                    </Typography>
                    <Typography variant='body2' className='descricao'>
                        clientes atendidos
                    </Typography>
                </Box>
            </Container>

            <Botao text='var(--primary)' color='var(--secondary)'/>
        </Box>
    )
}