import { Box, Typography } from '@mui/material'
import './styles.scss'
import Botao from '../botao'
import BenefitsSection from '../itemBeneficio/ItemBeneficio'

export default function Hero() {

    return (
        <Box className="hero">
            <Box className="apresentacao">
                <Typography variant='h2' className="title">ARMAÇÃO</Typography>
                <Typography variant='h2' className="title">+</Typography>

                <Typography variant='h2' className="title"> GRÁTIS</Typography>
            </Box>
            <Box className="valor">
                <Box className='apenas'>
                    <span>Exame por</span>
                    <span>apenas</span>
                    {/* <span>10x de</span> */}
                </Box>
                
                <Box className='promocao'>
                    <Typography variant='h2'>29</Typography>
                    <Typography variant='body1'>,90</Typography>
                </Box>
            </Box>
            <Box>
                <BenefitsSection/>
                <Botao/>
            </Box>

        </Box>
    )
}