// app/server-sitemap.xml/route.ts
import { getAllPosts } from '@/lib/api';
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const allPosts = getAllPosts();

  const processedPosts = allPosts.map(post => {
    return {
      loc: `${(process.env.SITE_URL || 'https://atullal.xyz')}/posts/${post.slug}`,
      lastmod: new Date(post.date).toISOString(),
      // changefreq
      // priority
    }
  });

  const staticPages = ['/', '/about', '/blog', '/projects', '/resume'];

  const processedStaticPages = staticPages.map(page => {
    return {
      loc: `${(process.env.SITE_URL || 'https://atullal.xyz')}${page}`,
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    }
  });
  return getServerSideSitemap([
    ...(processedPosts || []),
    ...(processedStaticPages || []),
  ])
}