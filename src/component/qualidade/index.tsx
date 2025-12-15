import './styles.scss';
import { Card, Typography } from "@mui/material";

interface Props {
    id: number;
    titulo: string;
    subtitulo: string
}

export default function Qualidade({id, titulo, subtitulo}: Props) {
    return (
        <Card className="qualidade" sx={{borderRadius: '25px', boxShadow:'5px 5px 10px var(--primary)'}} key={id}>
            <Typography variant="h3" className="title-quality">
                {titulo}
            </Typography>
            <Typography variant="body1" className="subtitle">
                {subtitulo}
            </Typography>
        </Card>
    )
}