import { Box, Skeleton } from '@mui/material';
import { useMemo, useState } from 'react';
import type { VisualAsset } from '../types/content';

const encode = (value: string) => encodeURIComponent(value).replace(/'/g, '%27').replace(/"/g, '%22');

export function placeholderDataUri(asset: Pick<VisualAsset, 'alt' | 'color' | 'kind'>) {
  const label = asset.kind === 'album' ? '♪' : asset.kind === 'map' ? '⌖' : asset.kind === 'video' ? '▶' : '♫';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 650">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${asset.color}"/>
          <stop offset=".55" stop-color="#ffb84d"/>
          <stop offset="1" stop-color="#20c7b5"/>
        </linearGradient>
        <pattern id="p" width="90" height="90" patternUnits="userSpaceOnUse">
          <circle cx="18" cy="18" r="4" fill="white" opacity=".24"/>
          <path d="M58 18v44a14 14 0 1 1-6-11V18h6Z" fill="white" opacity=".18"/>
        </pattern>
      </defs>
      <rect width="900" height="650" fill="url(#g)"/>
      <rect width="900" height="650" fill="url(#p)"/>
      <circle cx="675" cy="130" r="140" fill="white" opacity=".14"/>
      <circle cx="170" cy="510" r="190" fill="#1e172d" opacity=".18"/>
      <text x="450" y="325" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial" font-size="132" fill="white" opacity=".92">${label}</text>
      <text x="450" y="430" text-anchor="middle" font-family="Inter, Arial" font-size="38" font-weight="800" fill="white">${asset.alt.slice(0, 34)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encode(svg)}`;
}

interface VisualProps {
  asset: VisualAsset;
  ratio?: string;
  rounded?: number;
  className?: string;
}

export function Visual({ asset, ratio = '4 / 3', rounded = 18, className }: VisualProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const src = failed || !asset.url ? placeholderDataUri(asset) : asset.url;
  const background = useMemo(() => placeholderDataUri(asset), [asset]);
  const srcSet = asset.url?.includes('images.unsplash.com') && !failed
    ? `${asset.url}&w=640 640w, ${asset.url}&w=1100 1100w, ${asset.url}&w=1600 1600w`
    : undefined;

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: `${rounded}px`,
        aspectRatio: ratio,
        backgroundImage: `url("${background}")`,
        backgroundSize: 'cover',
        boxShadow: '0 18px 50px rgba(25, 15, 44, .18)'
      }}
    >
      {!loaded && <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" sx={{ position: 'absolute', inset: 0 }} />}
      <Box
        component="img"
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 700px) 92vw, 33vw"
        alt={asset.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity .35s ease, transform .45s ease',
          transform: 'scale(1.01)'
        }}
      />
    </Box>
  );
}
