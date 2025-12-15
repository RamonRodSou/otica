import './styles.scss';
import { Box } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

export default function BotaoUp() {

    function handleUpPage() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

    return (
        <Box className="botaoUp" onClick={handleUpPage}>
            <ArrowCircleUpIcon fontSize="large" />
        </Box>
    )
}