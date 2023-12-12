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

const workExperience = defineCollection({
	schema: z.object({
		position: z.string(),
		employer: z.string(),
		website: z.string().optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		icon: z.string(),
		isPresent: z.boolean(),
	})
})

export const collections = { blog, workExperience };
