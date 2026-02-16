import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const postsSourcePath = path.resolve('src/data/posts.ts');
const outputRoot = path.resolve('src/content/blog');

function fail(message) {
  console.error(`[migrate-posts] ${message}`);
  process.exit(1);
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function extractPostsArray(source) {
  const marker = 'export const posts: BlogPost[] =';
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) {
    return null;
  }

  const arrayStart = source.indexOf('[', markerIndex);
  const arrayEnd = source.indexOf('\n];', arrayStart);
  if (arrayStart < 0 || arrayEnd < 0) {
    return null;
  }

  return source.slice(arrayStart, arrayEnd + 2);
}

function toMarkdownBody(paragraphs) {
  if (!Array.isArray(paragraphs)) return '';
  return paragraphs
    .map((line) => String(line).trim())
    .filter((line) => line.length > 0)
    .join('\n\n');
}

function toMarkdownFile({
  id,
  locale,
  title,
  excerpt,
  date,
  tags,
  order,
  image,
  content,
}) {
  const headerLines = [
    '---',
    `id: ${yamlString(id)}`,
    `locale: ${yamlString(locale)}`,
    `title: ${yamlString(title)}`,
    `excerpt: ${yamlString(excerpt)}`,
    `date: ${yamlString(date)}`,
    `tags: ${JSON.stringify(tags)}`,
    `order: ${order}`,
  ];

  if (image) {
    headerLines.push(`image: ${yamlString(image)}`);
  }

  headerLines.push('---', '');

  const body = toMarkdownBody(content);
  return `${headerLines.join('\n')}${body ? `${body}\n` : ''}`;
}

function validatePostShape(post, index) {
  const required = [
    'id',
    'title_ja',
    'title_en',
    'title_ko',
    'excerpt_ja',
    'excerpt_en',
    'excerpt_ko',
    'date',
    'tags',
    'content_ja',
    'content_en',
    'content_ko',
  ];

  for (const key of required) {
    if (!(key in post)) {
      fail(`Post at index ${index} is missing key "${key}"`);
    }
  }
}

if (!fs.existsSync(postsSourcePath)) {
  fail(`File not found: ${postsSourcePath}`);
}

const source = fs.readFileSync(postsSourcePath, 'utf8');
const arrayLiteral = extractPostsArray(source);
if (!arrayLiteral) {
  if (fs.existsSync(outputRoot)) {
    const existing = fs.readdirSync(outputRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory());
    if (existing.length > 0) {
      console.log('[migrate-posts] Markdown migration appears to be already completed. Skipping.');
      process.exit(0);
    }
  }
  fail(`Could not find legacy posts array in ${postsSourcePath}`);
}

const posts = vm.runInNewContext(`(${arrayLiteral})`, {}, { timeout: 1000 });

if (!Array.isArray(posts)) {
  fail('Parsed posts is not an array');
}

fs.mkdirSync(outputRoot, { recursive: true });

for (const [index, post] of posts.entries()) {
  validatePostShape(post, index);
  const postId = String(post.id);
  const postDir = path.join(outputRoot, postId);
  fs.mkdirSync(postDir, { recursive: true });

  const locales = [
    {
      locale: 'ja',
      title: post.title_ja,
      excerpt: post.excerpt_ja,
      content: post.content_ja,
    },
    {
      locale: 'en',
      title: post.title_en,
      excerpt: post.excerpt_en,
      content: post.content_en,
    },
    {
      locale: 'ko',
      title: post.title_ko,
      excerpt: post.excerpt_ko,
      content: post.content_ko,
    },
  ];

  for (const item of locales) {
    const markdown = toMarkdownFile({
      id: postId,
      locale: item.locale,
      title: item.title,
      excerpt: item.excerpt,
      date: post.date,
      tags: post.tags,
      order: index + 1,
      image: post.image,
      content: item.content,
    });

    const filename = path.join(postDir, `index.${item.locale}.md`);
    fs.writeFileSync(filename, markdown, 'utf8');
  }
}

console.log(`[migrate-posts] Generated markdown files for ${posts.length} posts in ${outputRoot}`);
