// /feed.xml/route.ts
import { getAllPosts } from '@/lib/api';

function escapeXml(unsafe: string) {
    return unsafe.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&apos;");
  }

export async function GET() {
  const allPosts = getAllPosts();

let rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Atul Lal's Blog</title>
    <link>https://atullal.xyz</link>
    <atom:link href="https://atullal.xyz/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Personal blog of Atul Lal.</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <docs>https://blogs.law.harvard.edu/tech/rss</docs>
    <language>en</language>
    `;

  allPosts.forEach(post => {
    rssContent += `
    <item>
        <title>${escapeXml(post.title)}</title>
        <link>https://atullal.xyz/posts/${post.slug}</link>
        <description>${escapeXml(post.excerpt)}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>https://atullal.xyz/posts/${post.slug}</guid>
    </item>
    `;
  });

  rssContent += `
</channel>
</rss>
`;

  return new Response(rssContent, { headers: { "Content-Type": "application/rss+xml" } });
}
