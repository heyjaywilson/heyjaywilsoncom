import { defineCollection, z } from "astro:content";
import { webMention } from "./../utils/types/Webmention";

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
    includeBMC: z.boolean().default(true),
    tags: z.array(z.string()).default(["other"]),
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
  }),
});

const webmentions = defineCollection({
  type: "data",
  schema: z.array(webMention),
});

export const collections = { blog, workExperience, webmentions };
