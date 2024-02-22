// Types for all parts of a webmention

import { z } from 'astro/zod';

const wmProperty = z.enum(['in-reply-to', 'like-of', 'repost-of', 'bookmark-of', 'mention-of', 'rsvp'])

const wmAuthor = z.object({
	type: z.string(),
	name: z.string().optional(),
	photo: z.string().optional(),
	url: z.string()
})

const wmContent = z.object({
	html: z.string(),
	text: z.string()
})

const webMention = z.object({
	// type of webmention
	type: z.string(),
	author: z.object(wmAuthor.shape),
	// location of mention (someone elses website)
	url: z.string(),
	published: z.coerce.date().optional(),
	wmReceived: z.coerce.date().optional(),
	wmId: z.number().optional(),
	wmSource: z.string().optional(),
	wmTarget: z.string().optional(),
	wmProtocol: z.string().optional(),
	name: z.string().optional(),
	content: z.object(wmContent.shape).optional(),
	inReplyTo: z.string().optional(),
	wmProperty: z.string().optional(),
	wmPrivate: z.boolean().optional()
})

const webmentions = z.array(z.object(webMention.shape))

export type WebMentions = z.infer<typeof webmentions>
export type WebMention = z.infer<typeof webMention>
export type WMAuthor = z.infer<typeof wmAuthor>
export type WMContent = z.infer<typeof wmContent>

export const objects = { webMention, wmAuthor, wmContent, webmentions }
export const enums = { wmProperty }