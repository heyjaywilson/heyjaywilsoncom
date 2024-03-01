import { type CollectionEntry } from "astro:content";
import { slugifyAll } from "./slugify";

const getPostsForTag = (posts: CollectionEntry<"blog">[], tag: string) => {
  const filteredPosts = posts.filter((post) =>
    slugifyAll(post.data.tags).includes(tag),
  );
  return filteredPosts;
};

export default getPostsForTag;
