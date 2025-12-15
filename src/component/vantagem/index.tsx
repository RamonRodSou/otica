import { Box, Typography } from '@mui/material';
import './styles.scss';
import voucherImg from '../../asserts/img/voucher.png'

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
                    Vantagens imperdíveis esperam por você!
                </Typography>
                <Typography variant='body1' className='subtitle'>
                    Não perca a chance de acessar benefícios exclusivos: Preencha nosso formulário, agende sua visita e receba seu voucher em minutos. Tudo rápido e fácil!
                </Typography>
                <Box className="image" onClick={handleSubmit}>
                    <img src={voucherImg} alt="Vohcer 33 porcentos" width='250' height='100'/>
                </Box>
            </Box>
        </Box>

    )
}