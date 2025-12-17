import { Box, Typography } from '@mui/material'
import './styles.scss'
import Botao from '../botao'
import BenefitsSection from '../itemBeneficio/ItemBeneficio'

export default function Hero() {

    return (
        <Box className="hero">
            <Box className="apresentacao">
                <Typography variant='h2' className="title">O EXAME</Typography>
                <Typography variant='h2' className="title">É CORTESIA</Typography>
            </Box>
            <Box className="valor">
                <Box className='apenas'>
                    <span>Armarção</span>
                    <span>a partir</span>
                    <span>de</span>
                </Box>
                
                <Box className='promocao'>
                    <Typography variant='h2'>00</Typography>
                    <Typography variant='body1'>,00</Typography>
                </Box>
            </Box>
            <Box>
                <BenefitsSection/>
                <Botao/>
            </Box>

        </Box>
    )
}