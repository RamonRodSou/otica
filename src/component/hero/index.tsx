import { Box, Typography } from '@mui/material'
import './styles.scss'
import Botao from '../botao'
import BenefitsSection from '../itemBeneficio/ItemBeneficio'

export default function Hero() {

    return (
        <Box className="hero">
            <Box className="apresentacao">
                <Typography variant='h2' className="title">EXAME</Typography>
                <Typography variant='h2' className="title"> GRÁTIS</Typography>
            </Box>
            <Box className="valor">
                <Box className='apenas'>
                    <span>Armações</span>
                    <span>a partir</span>
                    <span>de</span>
                </Box>
                
                <Box className='promocao'>
                    <Typography variant='h2'>99</Typography>
                    <Typography variant='body1'>,99</Typography>
                </Box>
            </Box>
            <Box>
                <BenefitsSection/>
                <Botao/>
            </Box>

        </Box>
    )
}