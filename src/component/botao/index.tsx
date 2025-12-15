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
    const NOME = nome ? nome : 'RETIRAR MEU VOUCHER!'

    async function handleSubmit(): Promise<void> {
        const element = document.getElementById('faleConosco');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); 
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