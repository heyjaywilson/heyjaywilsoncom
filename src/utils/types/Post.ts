import { z } from "astro:content";

const PostTypeEnum = z.enum(["article", "note", "like", "location", "photo"]);
type PostType = z.infer<typeof PostTypeEnum>;

export type { PostType };
export { PostTypeEnum };
