import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    excerpt: z.string(),
    category: z.string(),
    image: z.string().optional(),
    translationSlug: z.string().optional(),
  }),
})

export const collections = { blog }
