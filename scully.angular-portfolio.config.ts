import { ScullyConfig , setPluginConfig } from '@scullyio/scully';
import { getSitemapPlugin, SitemapConfig } from '@gammastream/scully-plugin-sitemap';
import '@notiz/scully-plugin-rss';


const SitemapPlugin = getSitemapPlugin();
const sitemapConfig: SitemapConfig = {
  urlPrefix: 'https://krishnamohan.dev',
  sitemapFilename: 'sitemap.xml',
  merge: false,
  trailingSlash: true,
  changeFreq: 'weekly',
  priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  ignoredRoutes: ['/404'],
  routes: {
    '/blog/:title': {
          changeFreq: 'daily',
          priority: '0.9',
          sitemapFilename: 'sitemap-blog.xml',
          merge: true
      },
  }
}
setPluginConfig(SitemapPlugin, sitemapConfig);

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mdblog"
      }
    },
  }
};