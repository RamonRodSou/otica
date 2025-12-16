import Botao from '../botao'
import './styles.scss'
import { Box, Typography } from "@mui/material"

export default function Cabecalho() {

    return (
        <Box className="cabecalho">
            <Typography variant="h2" className="title">RESTAM APENAS <span>9</span> VAGAS PARA O EXAME DE VISTA CORTESIA DESTA SEMANA!</Typography>
            <Botao text='var(--primary)' color='var(--secondary)'/>
        </Box>
    )
}