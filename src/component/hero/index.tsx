import { Box, Typography } from '@mui/material'
import './styles.scss'
import Botao from '../botao'
import BenefitsSection from '../itemBeneficio/ItemBeneficio'

export default function Hero() {

    return (
        <Box className="hero">
            <Box className="apresentacao">
                <Typography variant='h2' className="title">2 Óculos</Typography>
                <Typography variant='h2' className="title">completos</Typography>
            </Box>
            <Box className="valor">
                <Box className='apenas'>
                    <span>por</span>
                    <span>apenas</span>
                    <span>10x de</span>
                </Box>
                
                <Box className='promocao'>
                    <Typography variant='h2'>29</Typography>
                    <Typography variant='body1'>,90</Typography>
                </Box>
            </Box>
            <Box>
                <BenefitsSection/>
            </Box>
            <Botao/>
            <Botao nome="VER UNIDADES" color='var(--premio-secondary)'/>

        </Box>
    )
}