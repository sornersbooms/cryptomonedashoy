import { ImageResponse } from 'next/og';
import { siteConfig } from './metadata';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {siteConfig.description}
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            opacity: 0.8,
          }}
        >
          📰 Noticias • 💰 Trading • 🚀 Blockchain
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
