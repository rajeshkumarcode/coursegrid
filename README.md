# CourseGrid

> **Start Date** 2026-07-15

## Introduction

A quick tutorial to learn about software engineering and life.

## Overview

When I started learning and writing programs for software development, It was a time consuming for me to read from huge collection of documentation. Over the time I realized that basic key information is also helpful to develop a software from scratch so I came with this idea to provide quick way of learn the skills to start. The detail documentation can help in later stages when we need to go deep dive into particular information about any concept and leaning but not all detailed documentation is required in beginning, especially for the people who already knows the fundamental concepts.

## Background

This project setup is based on [Fumadocs](https://www.fumadocs.dev/). It is using react js and configured with nextjs library for developing the number of features, maintain the hierarchy and level of tutorial topics.
Under the hood, it uses .md or .mdx files to populates the content.

## Current Focus & Next Steps

- Store .md or .mdx file on filestorage (S3, Azure blob or static storage of any cloud provider) and consume through DB or cloud (AWS, Azure or GCP) APIs.
- Add database support to write and store content.
- Integrate a CMS portal interface to paste and store content.

## Run this project on local machine for developing your own docs based web

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
