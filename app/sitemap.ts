import { allPosts, allPlaygrounds } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://fonti.dev/blog/${post.slug}`,
    lastModified: post.date,
  }));
  
  const playgrounds = allPlaygrounds.map((playground) => ({
    url: `https://fonti.dev/playgrounds/${playground.slug}`,
    lastModified: playground.date,
  }));

  const routes = ['', '/about', '/blog', '/playgrounds'].map(
    (route) => ({
      url: `https://fonti.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs, ...playgrounds];
}