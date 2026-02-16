import matter from 'gray-matter';

type Locale = 'ja' | 'en' | 'ko';

type LocalizedPostContent = {
  title: string;
  excerpt: string;
  content: string;
};

type SharedPostMeta = {
  date: string;
  tags: string[];
  order: number;
  image?: string;
  draft: boolean;
};

export type BlogPost = {
  id: string;
  title_ja: string;
  title_en: string;
  title_ko: string;
  date: string;
  excerpt_ja: string;
  excerpt_en: string;
  excerpt_ko: string;
  content_ja: string;
  content_en: string;
  content_ko: string;
  tags: string[];
  order: number;
  image?: string;
};

type PostBuildState = {
  shared?: SharedPostMeta;
  locales: Partial<Record<Locale, LocalizedPostContent>>;
};

const markdownFiles = import.meta.glob('/src/content/blog/**/index.*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const PATH_PATTERN = /\/src\/content\/blog\/([^/]+)\/index\.(ja|en|ko)\.md$/;

function assertNonEmptyString(value: unknown, label: string, sourcePath: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`[posts] ${label} must be a non-empty string: ${sourcePath}`);
  }
  return value;
}

function parseLocale(value: unknown, sourcePath: string): Locale {
  if (value === 'ja' || value === 'en' || value === 'ko') {
    return value;
  }
  throw new Error(`[posts] locale must be one of ja/en/ko: ${sourcePath}`);
}

function parseDate(value: unknown, sourcePath: string): string {
  const date = assertNonEmptyString(value, 'date', sourcePath);
  if (!DATE_PATTERN.test(date)) {
    throw new Error(`[posts] date must match YYYY-MM-DD: ${sourcePath}`);
  }
  return date;
}

function parseTags(value: unknown, sourcePath: string): string[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`[posts] tags must be a non-empty string array: ${sourcePath}`);
  }
  const tags = value.map((tag, index) => {
    if (typeof tag !== 'string' || tag.trim().length === 0) {
      throw new Error(`[posts] tags[${index}] must be a non-empty string: ${sourcePath}`);
    }
    return tag;
  });
  return tags;
}

function parseOrder(value: unknown, sourcePath: string): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
    throw new Error(`[posts] order must be a positive integer: ${sourcePath}`);
  }
  return value;
}

function parseOptionalImage(value: unknown, sourcePath: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`[posts] image must be a non-empty string when present: ${sourcePath}`);
  }
  return value;
}

function parseOptionalDraft(value: unknown, sourcePath: string): boolean {
  if (value === undefined) return false;
  if (typeof value !== 'boolean') {
    throw new Error(`[posts] draft must be boolean when present: ${sourcePath}`);
  }
  return value;
}

function sameStringArray(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function loadPostsFromMarkdown(): BlogPost[] {
  const byId = new Map<string, PostBuildState>();

  for (const [sourcePath, rawSource] of Object.entries(markdownFiles)) {
    const pathMatch = sourcePath.match(PATH_PATTERN);
    if (!pathMatch) {
      throw new Error(`[posts] Unexpected markdown path: ${sourcePath}`);
    }

    const folderId = pathMatch[1];
    const fileLocale = pathMatch[2] as Locale;
    const { data, content } = matter(rawSource);

    const id = assertNonEmptyString(data.id, 'id', sourcePath);
    const locale = parseLocale(data.locale, sourcePath);
    const title = assertNonEmptyString(data.title, 'title', sourcePath);
    const excerpt = assertNonEmptyString(data.excerpt, 'excerpt', sourcePath);
    const date = parseDate(data.date, sourcePath);
    const tags = parseTags(data.tags, sourcePath);
    const order = parseOrder(data.order, sourcePath);
    const image = parseOptionalImage(data.image, sourcePath);
    const draft = parseOptionalDraft(data.draft, sourcePath);

    if (id !== folderId) {
      throw new Error(`[posts] id (${id}) must match folder name (${folderId}): ${sourcePath}`);
    }
    if (locale !== fileLocale) {
      throw new Error(`[posts] locale (${locale}) must match filename locale (${fileLocale}): ${sourcePath}`);
    }

    const existing = byId.get(id) ?? { locales: {} };
    const shared: SharedPostMeta = { date, tags, order, image, draft };

    if (existing.shared) {
      if (existing.shared.date !== shared.date) {
        throw new Error(`[posts] date mismatch across locales: ${id}`);
      }
      if (!sameStringArray(existing.shared.tags, shared.tags)) {
        throw new Error(`[posts] tags mismatch across locales: ${id}`);
      }
      if (existing.shared.order !== shared.order) {
        throw new Error(`[posts] order mismatch across locales: ${id}`);
      }
      if ((existing.shared.image ?? undefined) !== (shared.image ?? undefined)) {
        throw new Error(`[posts] image mismatch across locales: ${id}`);
      }
      if (existing.shared.draft !== shared.draft) {
        throw new Error(`[posts] draft mismatch across locales: ${id}`);
      }
    } else {
      existing.shared = shared;
    }

    if (existing.locales[locale]) {
      throw new Error(`[posts] Duplicate locale file detected for ${id}/${locale}`);
    }

    existing.locales[locale] = { title, excerpt, content };
    byId.set(id, existing);
  }

  const orderSet = new Set<number>();
  const result: BlogPost[] = [];

  for (const [id, postState] of byId.entries()) {
    if (!postState.shared) {
      throw new Error(`[posts] Internal error: missing shared metadata for ${id}`);
    }

    const ja = postState.locales.ja;
    const en = postState.locales.en;
    const ko = postState.locales.ko;

    if (!ja || !en || !ko) {
      throw new Error(`[posts] Missing locale file(s) for ${id}. Required: ja/en/ko`);
    }

    if (postState.shared.draft) {
      continue;
    }

    if (orderSet.has(postState.shared.order)) {
      throw new Error(`[posts] Duplicate order value detected: ${postState.shared.order}`);
    }
    orderSet.add(postState.shared.order);

    result.push({
      id,
      title_ja: ja.title,
      title_en: en.title,
      title_ko: ko.title,
      date: postState.shared.date,
      excerpt_ja: ja.excerpt,
      excerpt_en: en.excerpt,
      excerpt_ko: ko.excerpt,
      content_ja: ja.content,
      content_en: en.content,
      content_ko: ko.content,
      tags: postState.shared.tags,
      order: postState.shared.order,
      image: postState.shared.image,
    });
  }

  return result.sort((a, b) => a.order - b.order);
}

export const posts: BlogPost[] = loadPostsFromMarkdown();

export const getPostById = (id: string) => posts.find((post) => post.id === id);
