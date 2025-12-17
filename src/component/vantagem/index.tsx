import { Box, Typography } from '@mui/material';
import './styles.scss';
import voucherImg from '../../asserts/img/voucher.png'
import Botao from '../botao';

export default function Vantagem() {

    async function handleSubmit(): Promise<void> {
        const element = document.getElementById('faleConosco');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); 
        }
    }

    return (
        <Box className="vantagem">
            <Box className="infor">
                <Typography variant='h3' className='title'>
                    Por que essa é a melhor oferta de SP?
                </Typography>
                <Typography variant='body1' className='subtitle'>
                Esqueça as pegadinhas. Aqui a transparência é total:<br/>
                * Você agenda seu Exame de Vista Cortesia.<br/>
                * Escolhe as lentes ideais para o seu grau.<br/>
                * E GANHA a armação de presente (seleção de milhares de modelos).
                </Typography>
                <Botao color='var(--secondary)' text='var(--primary)'/>
            </Box>
        </Box>

    )
}