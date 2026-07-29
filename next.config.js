/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The rebrand folds services into the packages block on the home page.
      { source: '/services', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Photo and film filenames are content-stable; let them cache hard.
        source: '/:dir(photos|film)/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;
