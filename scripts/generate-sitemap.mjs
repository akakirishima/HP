import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const DEFAULT_SITE_URL = 'https://hp-six-beryl.vercel.app';
const siteUrl = (process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/work', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.5', changefreq: 'yearly' },
];

const projectsPath = path.resolve('src/data/projects.ts');
const projectsSource = fs.readFileSync(projectsPath, 'utf8');
const ids = Array.from(projectsSource.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(match => match[1]);
const uniqueIds = Array.from(new Set(ids));

const projectRoutes = uniqueIds.map((id) => ({
  path: `/projects/${id}`,
  priority: '0.6',
  changefreq: 'monthly',
}));

const blogRoot = path.resolve('src/content/blog');
const uniquePostIds = [];
const seenPostIds = new Set();

if (fs.existsSync(blogRoot)) {
  const blogEntries = fs.readdirSync(blogRoot, { withFileTypes: true });
  const localePriority = ['index.en.md', 'index.ja.md', 'index.ko.md'];

  for (const entry of blogEntries) {
    if (!entry.isDirectory()) continue;

    const postDir = path.join(blogRoot, entry.name);
    const markdownPath = localePriority
      .map((filename) => path.join(postDir, filename))
      .find((candidate) => fs.existsSync(candidate));

    if (!markdownPath) continue;

    const raw = fs.readFileSync(markdownPath, 'utf8');
    const { data } = matter(raw);
    const id = typeof data.id === 'string' && data.id.trim() ? data.id.trim() : entry.name;
    const draft = data.draft === true;

    if (!draft && !seenPostIds.has(id)) {
      seenPostIds.add(id);
      uniquePostIds.push(id);
    }
  }
} else {
  const postsPath = path.resolve('src/data/posts.ts');
  const postsSource = fs.readFileSync(postsPath, 'utf8');
  const postIds = Array.from(postsSource.matchAll(/id:\s*['"]([^'"]+)['"]/g)).map(match => match[1]);
  for (const id of postIds) {
    if (!seenPostIds.has(id)) {
      seenPostIds.add(id);
      uniquePostIds.push(id);
    }
  }
}

const postRoutes = uniquePostIds.map((id) => ({
  path: `/blog/${id}`,
  priority: '0.6',
  changefreq: 'monthly',
}));

const urls = [...staticRoutes, ...projectRoutes, ...postRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((route) => {
    const loc = `${siteUrl}${route.path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <priority>${route.priority}</priority>\n    <changefreq>${route.changefreq}</changefreq>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

const outPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
