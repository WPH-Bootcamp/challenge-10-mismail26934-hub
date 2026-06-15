import type { NextConfig } from 'next';

function getApiImagePattern():
  | { protocol: 'http' | 'https'; hostname: string }
  | undefined {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) return undefined;

  try {
    const { protocol, hostname } = new URL(baseUrl);
    if (!hostname) return undefined;

    return {
      protocol: protocol.replace(':', '') as 'http' | 'https',
      hostname,
    };
  } catch {
    return undefined;
  }
}

const apiImagePattern = getApiImagePattern();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      ...(apiImagePattern ? [apiImagePattern] : []),
      {
        protocol: 'https',
        hostname: '**.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
