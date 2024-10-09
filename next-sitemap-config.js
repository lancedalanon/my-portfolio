/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://lance-dalanon.netlify.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};