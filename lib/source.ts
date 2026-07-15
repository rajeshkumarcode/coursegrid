import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

// Sections shown on the home page. Each corresponds to a top-level
// folder under content/docs and a meta.json inside it.
export const TUTORIAL_SECTIONS = [
  {
    slug: 'html',
    name: 'HTML',
    description: 'Structure the web: elements, semantics, forms and accessibility.',
  },
  {
    slug: 'css',
    name: 'CSS',
    description: 'Style and lay out pages: selectors, box model, Flexbox and Grid.',
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    description: 'Bring pages to life: variables, functions, DOM and async code.',
  },
] as const;

export function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}

/**
 * Returns every tutorial page that belongs to a given section
 * (e.g. "javascript"), sorted by the `order` field defined in
 * that section's meta.json, falling back to the file name.
 */
export function getSectionPages(sectionSlug: string) {
  const pages = source.getPages().filter((page) => page.slugs[0] === sectionSlug);
 
  return pages.sort((a, b) => a.file.name.localeCompare(b.file.name));
}

export function getAllSections() {
  return TUTORIAL_SECTIONS.map((section) => ({
    ...section,
    pages: getSectionPages(section.slug),
  }));
}
