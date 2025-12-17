import { Box } from '@mui/material'
import logo from '../../asserts/img/logo.webp'
import './styles.scss'

export default function Rodape() {

    function handleClick() {
        try {
            window.location.href = "https://api.whatsapp.com/send/?phone=5521972923210&text=Ol%C3%A1+Ramon+Technosou,+poderia+me+ajudar?&type=phone_number&app_absent=0";

        } catch (error) {
            console.error("Routing Error", error)
        }
    }

    return (
        <Box className="rodape" onClick={handleClick}>
            <p className='description'>© Copyright</p>
            <span>
                <img src={logo} alt="Logo Technosou Solution" width={20} />
                <p className='description'>Technosou & Panda Hub - Since 2023</p>
            </span>
        </Box>
    )
}