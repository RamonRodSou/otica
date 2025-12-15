import Botao from '../botao'
import './styles.scss'
import { Box, Typography } from "@mui/material"

export default function Cabecalho() {

    return (
        <Box className="cabecalho">
            <Typography variant="h2" className="title">RESTAM APENAS <span>17</span> VOUCHERS DE DESCONTO PARA USAR NA LOJA!</Typography>
            <Botao text='var(--primary)' color='var(--secondary)'/>
        </Box>
    )
}

