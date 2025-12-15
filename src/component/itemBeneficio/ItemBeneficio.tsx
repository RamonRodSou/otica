import './styles.scss'
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'; 
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

interface Props {
    icon: any;
    title: string;
    subtitle: string;
}

const BenefitItem = ({ icon, title, subtitle }: Props) => {
  return (
    <Box className="beneficios">
      {React.cloneElement(icon, { sx: { fontSize: 40, color: 'var(--premio)' } })}
      
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="text.primary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default function BenefitsSection() {
  return (
    <Box className='beneficios-container'> 
      
      <Stack
        direction={{ xs: 'row', sm: 'row' }} 
        spacing={{ xs: 4, sm: 8 }} 
        justifyContent="center"
        alignItems="center"
      >
        <BenefitItem
          icon={<AccessTimeOutlinedIcon />}
          title="Pronto em"
          subtitle="até 1h"
        />

        <BenefitItem
          icon={<LocalActivityOutlinedIcon />}
          title="Descontos"
          subtitle="exclusivos"
        />

        <BenefitItem
          icon={<VerifiedOutlinedIcon />}
          title="Garantia de"
          subtitle="1 ano"
        />
      </Stack>
      
    </Box>
  );
}