export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://fonti.dev/sitemap.xml',
    host: 'https://fonti.dev',
  };
}