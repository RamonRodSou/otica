import { useState } from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import './styles.scss'

interface DadosFormulario {
    nome: string;
    telefone: string;
    email: string;
    servico: string;
}

interface ErrosFormulario {
    nome?: string;
    telefone?: string;
}

export default function Formulario() {
    const [form, setForm] = useState<DadosFormulario>({
        nome: '',
        telefone: '',
        email: '',
        servico: ''
    });

    const [errors, setErrors] = useState<ErrosFormulario>({})

    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, '')
        return numbers
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d)(\d{4})$/, '$1-$2')
            .slice(0, 15)
    }

    const handleChange = (field: keyof DadosFormulario, value: string) => {
        let finalValue = value
        if (field === 'telefone') {
            finalValue = formatPhone(value)
        }
        setForm((prev) => ({ ...prev, [field]: finalValue }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!form.nome || !form.telefone) {
            setErrors({
                nome: !form.nome ? 'Campo obrigatório' : undefined,
                telefone: !form.telefone ? 'Campo obrigatório' : undefined
            })
            return
        }
        console.log('Enviado:', form)
    }

    return (
        <Box className="formulario">
            <Box className="formulario-data">
                <Box className="infor">
                    <Typography variant="h2" component="h2" className="title">
                        Aproveite agora mesmo as melhores ofertas!
                    </Typography>
                    
                    <Typography variant="body1" className="subtitle">
                        Complete o cadastro agora e receba um voucher de desconto para aproveitar nossas promoções incríveis. 
                        <br/><span>Simples, rápido e vantajoso!</span>
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit} id='faleConosco'>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Nome Completo"
                            value={form.nome}
                            onChange={(e) => handleChange('nome', e.target.value)}
                            fullWidth
                            required
                            error={!!errors.nome}
                            helperText={errors.nome}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, marginBottom: '1rem' }}>
                        <TextField
                            label="Telefone"
                            value={form.telefone}
                            onChange={(e) => handleChange('telefone', e.target.value)}
                            fullWidth
                            required
                            placeholder='(21) 90000-0000'
                            error={!!errors.telefone}
                            helperText={errors.telefone}
                        />
                    </Box>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Email"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            fullWidth
                            type="email"
                        />
                    </Box>
                    <Box marginBottom="1rem">
                        <TextField
                            label="Serviço"
                            multiline
                            rows={4}
                            value={form.servico}
                            required
                            onChange={(e) => handleChange('servico', e.target.value)}
                            fullWidth
                        />
                    </Box>
                    
                    <Button 
                        variant="contained" 
                        className='botao'
                        type='submit'
                        sx={{
                            backgroundColor: 'var(--premio)',
                            color: 'var(--secondary)', 
                            borderRadius: '50px',
                            margin:'.5rem',
                            padding:'.5rem 2rem',
                            fontWeight:'900',
                            '&:hover': {
                                backgroundColor: 'var(--premio-houver)',
                            }
                        }}
                    >
                        GARANTIR MEU VOUCHER!
                    </Button>
                </form>
            </Box>
        </Box>
    )       
}