import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Reads the Obsidian vault notes directly. Edit notes in Obsidian as usual;
// the site picks up changes on the next build / dev reload.
const notes = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!README.md'], base: '../Research' }),
  schema: z
    .object({
      title: z.string().optional(),
      date: z.coerce.date().optional(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      sources: z.array(z.string()).optional(),
    })
    .passthrough(),
});

export const collections = { notes };
