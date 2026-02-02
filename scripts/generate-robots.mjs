import fs from 'node:fs';
import path from 'node:path';

const DEFAULT_SITE_URL = 'https://hp-six-beryl.vercel.app';
const siteUrl = (process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const content = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

const outPath = path.resolve('public/robots.txt');
fs.writeFileSync(outPath, content, 'utf8');
