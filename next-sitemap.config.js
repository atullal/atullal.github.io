/** @type {import('next-sitemap').IConfig} */
module.exports = {
    output: "export",
    siteUrl: process.env.SITE_URL || 'https://atullal.xyz',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://atullal.xyz/server-sitemap-index.xml', // <==== Add here
      ],
    },
    // ...other options
  }