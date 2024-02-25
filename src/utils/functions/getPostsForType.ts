import { getCollection, type CollectionEntry } from "astro:content";
import { type PostType } from "../types/Post";

const getPostsForType = async (type: PostType) => {
  const postsOfType: CollectionEntry<"blog">[] = (
    await getCollection("blog")
  ).filter((a) => isPostRightType(type, a));
  postsOfType.sort((a, b) => sortByDate(a, b));
  return postsOfType;
};

function isPostRightType(type: PostType, entry: CollectionEntry<"blog">) {
  return entry.data.type === type.valueOf();
}

function sortByDate(a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) {
  let aCompareDate = a.data.updatedDate ?? a.data.pubDate;
  let bCompareDate = b.data.updatedDate ?? b.data.pubDate;
  return bCompareDate.valueOf() - aCompareDate.valueOf();
}
