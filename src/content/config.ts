import { defineCollection, z } from "astro:content";
import { webMention } from "./../utils/types/Webmention";
import { string } from "astro/zod";

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
    type: z.string().default("note"),
    tags: z.array(z.string()).default(["other"]),
    mentions: z.array(z.string()).default([]),
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

const blogMentions = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    website: z.string().optional(),
    categories: z.array(z.string()).default([]),
    rss: z.string().optional(),
    youtube: z.string().optional(),
    threads: z.string().optional(),
    mastodon: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const referrals = defineCollection({
  schema: z.object({
    link: z.string(),
    name: z.string(),
    dateAdded: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  })
})

export const collections = { blog, workExperience, webmentions, blogMentions, referrals };
