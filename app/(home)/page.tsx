import Link from 'next/link';
import { getAllSections } from '@/lib/source';

export default function HomePage() {
  const sections = getAllSections();

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Learn to build the web
        </h1>
        <p className="mx-auto max-w-2xl text-fd-muted-foreground">
          Free, self-paced tutorials covering HTML, CSS and JavaScript.
          Every lesson below is a Markdown/MDX file in{' '}
          <code>content/docs</code> &mdash; edit the files (or wire up a CMS)
          and this page updates automatically.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.slug}
            className="flex flex-col rounded-xl border bg-fd-card p-6"
          >
            <h2 className="mb-1 text-xl font-semibold">{section.name}</h2>
            <p className="mb-4 text-sm text-fd-muted-foreground">
              {section.description}
            </p>

            <ul className="mb-4 flex flex-1 flex-col gap-2 text-sm">
              {section.pages.map((page) => (
                <li key={page.url}>
                  <Link
                    href={page.url}
                    className="text-fd-primary underline-offset-4 hover:underline"
                  >
                    {page.data.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={`/docs/${section.slug}`}
              className="mt-auto inline-flex items-center justify-center rounded-lg border bg-fd-secondary px-4 py-2 text-sm font-medium hover:bg-fd-accent"
            >
              Start {section.name} tutorial &rarr;
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}