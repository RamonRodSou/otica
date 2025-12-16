import React from 'react';
import Button from '@mui/material/Button';
import './styles.scss';

interface Atributos {
    nome?: string;
    color?: string;
    text?: string;
}

export default function Botao({ nome, color, text }: Atributos) {

    const BACKGROUND_COLOR = color ? color : 'var(--premio)' ;
    const HOVER_COLOR = 'var(--premio-houver)';  
    const TEXT_COLOR = text ? text : 'var(--secondary)'
    const NOME = nome ? nome : 'QUERO AGENDAR MEU EXAME!'

    async function handleSubmit(): Promise<void> {
        // const element = document.getElementById('faleConosco');
        // if (element) {
        //     element.scrollIntoView({ behavior: 'smooth' }); 
        // }

        try {
            window.location.href = "https://api.whatsapp.com/send/?phone=5515991887762&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0";
        } catch (error) {
            console.error("Routing Error", error)
        }
    }

    return (
        <Button 
            variant="contained" 
            className='botao'
            onClick={handleSubmit}
            sx={{
                backgroundColor: BACKGROUND_COLOR,
                color: TEXT_COLOR, 
                borderRadius: '50px',
                margin:'.5rem',
                padding:'.5rem 2rem',
                fontWeight:'900',
                '&:hover': {
                    backgroundColor: HOVER_COLOR,
                }
            }}
        >
            {NOME}
        </Button>
    )
}