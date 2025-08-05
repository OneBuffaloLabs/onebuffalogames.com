/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onebuffalogames.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
};
