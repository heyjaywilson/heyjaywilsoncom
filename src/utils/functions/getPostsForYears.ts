import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const posts: CollectionEntry<"blog">[] = (await getCollection("blog"))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const postYears = new Map<number, CollectionEntry<"blog">[]>();

  for (let post of posts) {
    const postDate: Date = post.data.pubDate;
    const year = postDate.getFullYear();

    let valuesAtYear = postYears.get(year) ?? [];
    valuesAtYear.push(post);
    postYears.set(year, valuesAtYear);
  }

  return [...postYears.entries()].map(([year, posts]) => ({
    params: { year },
    props: { posts },
  }));
}