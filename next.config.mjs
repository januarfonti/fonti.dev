import { sql } from '@vercel/postgres';

const nextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  transpilePackages: ['next-mdx-remote'],
  async redirects() {
    const { rows: redirects } = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return redirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent,
    }));
  },
};

export default nextConfig;
