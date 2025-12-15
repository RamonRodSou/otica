import Botao from '../botao';
import './styles.scss';
import { Box, Typography } from '@mui/material';

export default function Lojas() {

    return (
        <Box className="lojas">
            <Box className="infor">
                <Typography variant='h3' className='title'>
                    Somos a maior e melhor rede de óticas de SP!
                </Typography>
            </Box>

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
                    + 22.000
                </Typography>
                <Typography variant='body2' className='descricao'>
                    lojas para melhor te atender
                </Typography>
            </Box>

            <Botao/>
        </Box>
    )
}