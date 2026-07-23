import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Visual } from '../components/Visual';
import { timeline } from '../data/timeline';

export function TimelinePage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader eyebrow="Frise chronologique" title="Une histoire illustree de la chanson" />
      <Stack spacing={3}>
        {timeline.map((event, index) => (
          <Paper key={event.year} component={motion.article} initial={{ opacity: 0, x: index % 2 ? 26 : -26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '240px 1fr' }, gap: 3, p: 2, borderRadius: 5 }}>
            <Visual asset={event.image} ratio="16 / 11" rounded={18} />
            <Box sx={{ alignSelf: 'center' }}>
              <Typography variant="h2" sx={{ fontWeight: 950, color: event.image.color }}>{event.year}</Typography>
              <Typography variant="h4" sx={{ fontWeight: 950 }}>{event.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.2 }}>Illustration, miniature, icone et liens documentaires pourront etre branches sur les sources patrimoniales.</Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
