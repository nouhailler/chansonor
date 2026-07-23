import CloseIcon from '@mui/icons-material/Close';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Box, Button, IconButton, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BrowserDemoEngine, type DemoEngineState, type DemoSpeed, type DemoVisualState } from './engine';
import { demoScenarios } from './scenarios';
import { activateDemoSeed, clearDemoSeed } from './session';

const speeds: DemoSpeed[] = [0.5, 1, 1.5, 2];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

export function DemoMode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('demo');
  const scenario = scenarioId ? demoScenarios[scenarioId] : undefined;
  const reducedMotion = useReducedMotion();
  const [state, setState] = useState<DemoEngineState | undefined>();
  const [visual, setVisual] = useState<DemoVisualState>();
  const [speed, setSpeed] = useState<DemoSpeed>(1);
  const engineRef = useRef<BrowserDemoEngine>();
  const returnPathRef = useRef<string>();

  const navigateWithDemo = useMemo(
    () => (path: string) => {
      const next = `${path}${path.includes('?') ? '&' : '?'}demo=${scenario?.id ?? ''}`;
      navigate(next);
    },
    [navigate, scenario?.id]
  );

  useEffect(() => {
    if (!scenario) return undefined;

    returnPathRef.current = `${location.pathname}${location.search.replace(/([?&])demo=[^&]*&?/, '$1').replace(/[?&]$/, '')}${location.hash}`;
    activateDemoSeed(scenario.seed);

    const engine = new BrowserDemoEngine({
      scenario,
      speed,
      reducedMotion,
      navigate: navigateWithDemo,
      onStepChange: setState,
      onVisualChange: setVisual,
      onExit: () => {
        clearDemoSeed();
        navigate(returnPathRef.current || '/', { replace: true });
      }
    });

    engineRef.current = engine;
    engine.play();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') engine.exit();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      engineRef.current = undefined;
      clearDemoSeed();
    };
  }, [navigate, navigateWithDemo, reducedMotion, scenario]);

  useEffect(() => {
    engineRef.current?.setSpeed(speed);
  }, [speed]);

  if (!scenario || !state || !visual) return null;

  const stepCount = scenario.steps.length;
  const currentStep = Math.max(0, state.currentStepIndex + 1);
  const isPlaying = state.status === 'playing';

  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          left: visual.cursor.x,
          top: visual.cursor.y,
          width: 24,
          height: 24,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          border: '3px solid white',
          boxShadow: '0 10px 30px rgba(0,0,0,.28)',
          transform: 'translate(-50%, -50%)',
          transition: reducedMotion ? 'none' : 'left .38s ease, top .38s ease',
          zIndex: 2000,
          pointerEvents: 'none'
        }}
      />
      {visual.targetRect && (
        <Box
          aria-hidden
          sx={{
            position: 'fixed',
            left: visual.targetRect.x - 8,
            top: visual.targetRect.y - 8,
            width: visual.targetRect.width + 16,
            height: visual.targetRect.height + 16,
            border: '3px solid',
            borderColor: 'primary.main',
            borderRadius: 3,
            boxShadow: '0 0 0 9999px rgba(20,16,32,.22)',
            transition: reducedMotion ? 'none' : 'all .28s ease',
            zIndex: 1998,
            pointerEvents: 'none'
          }}
        />
      )}
      {visual.narration && (
        <Paper
          elevation={10}
          sx={{
            position: 'fixed',
            left: visual.narration.placement === 'center' ? '50%' : { xs: 16, md: 32 },
            right: visual.narration.placement === 'center' ? 'auto' : { xs: 16, md: 'auto' },
            top: visual.narration.placement === 'bottom' ? 'auto' : visual.narration.placement === 'center' ? '50%' : 88,
            bottom: visual.narration.placement === 'bottom' ? 104 : 'auto',
            maxWidth: 460,
            p: 2,
            borderRadius: 3,
            transform: visual.narration.placement === 'center' ? 'translate(-50%, -50%)' : 'none',
            zIndex: 2001
          }}
        >
          <Typography sx={{ fontWeight: 850 }}>{visual.narration.message}</Typography>
        </Paper>
      )}
      <Paper
        elevation={12}
        sx={{
          position: 'fixed',
          left: '50%',
          bottom: 20,
          transform: 'translateX(-50%)',
          width: { xs: 'calc(100vw - 24px)', sm: 'auto' },
          p: 1,
          borderRadius: 3,
          zIndex: 2002
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label={isPlaying ? 'Mettre la demo en pause' : 'Lancer la demo'} onClick={() => (isPlaying ? engineRef.current?.pause() : engineRef.current?.play())}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton aria-label="Etape suivante" onClick={() => void engineRef.current?.next()}>
            <SkipNextIcon />
          </IconButton>
          <Typography variant="body2" sx={{ minWidth: 58, fontWeight: 900 }}>
            {currentStep}/{stepCount}
          </Typography>
          <Select size="small" value={speed} onChange={(event) => setSpeed(event.target.value as DemoSpeed)} sx={{ minWidth: 92 }}>
            {speeds.map((item) => (
              <MenuItem key={item} value={item}>
                x{item}
              </MenuItem>
            ))}
          </Select>
          <Button startIcon={<CloseIcon />} onClick={() => engineRef.current?.exit()} sx={{ whiteSpace: 'nowrap' }}>
            Quitter
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
