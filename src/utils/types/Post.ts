import { z } from "zod";

const PostTypeEnum = z.enum(["article", "post", "note", "like", "location", "photo"])
type PostType = z.infer<typeof PostTypeEnum>

export type { PostType };
export { PostTypeEnum };