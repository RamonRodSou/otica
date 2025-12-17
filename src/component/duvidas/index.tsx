import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from './faq';
import './styles.scss';
import Botao from '../botao';

export default function Duvidas() {
    const [expanded, setExpanded] = useState<number>(0);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : 0);
    };

    return (
        <Box className="duvidas">
            <Typography 
                variant="h4" 
                component="h2" 
                className="title"
            >
                Tire todas as suas dúvidas!
            </Typography>

        {faqData.map((item) => {
            const isExpanded = expanded === item.id;

            return (
                <Accordion 
                    key={item.id}
                    expanded={isExpanded} 
                    onChange={handleChange(item.id)}
                    className={`accordion ${isExpanded ? 'expanded' : ''}`}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon" />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                    >
                    <Typography className="question">
                        {item.pergunta}
                    </Typography>
                    </AccordionSummary>
                    
                    <AccordionDetails>
                        <Typography className="response">
                            {item.resposta}
                        </Typography>
                    </AccordionDetails>
            </Accordion>
            );
        })}
        <Botao/>
        </Box>
    );
}