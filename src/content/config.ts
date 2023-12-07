import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		metatitle: z.string().optional(),
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		canonicalURL: z.string().optional(),
		videoID: z.string().optional(),
		isFeatured: z.boolean().optional(),
	}),
});

export const collections = { blog };
