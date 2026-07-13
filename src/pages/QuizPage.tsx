import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, Button, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material';
import ConfettiExplosion from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Visual } from '../components/Visual';
import { songs } from '../data/library';

export function QuizPage() {
  const [won, setWon] = useState(false);
  const question = songs[0];
  const answers = ['Edith Piaf', 'Barbara', 'France Gall', 'Dalida'];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 6, background: 'linear-gradient(135deg, rgba(255,79,123,.14), rgba(255,184,77,.18))' }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <EmojiEventsIcon color="primary" />
          <Typography variant="h4" sx={{ fontWeight: 950 }}>Quiz visuel</Typography>
          {won && <ConfettiExplosion color="secondary" />}
        </Stack>
        <Visual asset={question.cover} ratio="16 / 9" rounded={24} />
        <Typography variant="h5" sx={{ mt: 3, fontWeight: 950 }}>Qui interprete « {question.title} » ?</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {answers.map((answer) => (
            <Grid size={{ xs: 12, sm: 6 }} key={answer}>
              <Button component={motion.button} whileTap={{ scale: .97 }} fullWidth size="large" variant={answer === 'Edith Piaf' && won ? 'contained' : 'outlined'} onClick={() => setWon(answer === 'Edith Piaf')} sx={{ minHeight: 64, borderRadius: 4, fontWeight: 950 }}>
                {answer}
              </Button>
            </Grid>
          ))}
        </Grid>
        {won && <Box component={motion.div} initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}><Typography sx={{ mt: 2, fontWeight: 900, color: 'primary.main' }}>Badge debloque : Oreille d’or.</Typography></Box>}
      </Paper>
    </Container>
  );
}
