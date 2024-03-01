import MarkdownIt from "markdown-it";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const parser = new MarkdownIt();

export const GET = async () => {
  const allBlogposts = await getCollection("blog");
  const sortedPosts = allBlogposts.sort(
    (a, b) =>
      new Date(b.data.updatedDate ?? b.data.pubDate).valueOf() -
      new Date(a.data.updatedDate ?? a.data.pubDate).valueOf(),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "https://heyjaywilson.com",
    items: sortedPosts.map((post) => ({
      link: `/blog/${post.slug}`,
      content: removeJSX(parser.render(post.body), post.data.videoID ?? ""),
      title: post.data.metatitle ?? post.data.title,
      pubDate: post.data.pubDate,
      author: `heyjay@cctplus.dev`,
      categories: [post.data.type],
    })),
  });
};

const makeYouTubeLink = (videoID: string) => {
  return `<a href="https://www.youtube.com/watch?v=${videoID}">The video was embedded in the post. You can watch on YouTube.</a>`;
};
const removeJSX = (html: string, videoID: string) => {
  return html
    .replace(/<p>import\s(YouTube|AffiliateDisclaimer)\sfrom\s'.*'<\/p>/gm, "")
    .replace(/<p>&lt;(YouTube).*\/&gt;<\/p>/gm, makeYouTubeLink(videoID))
    .replace(
      /<p>&lt;(AffiliateDisclaimer).*\/&gt;<\/p>/gm,
      "<p>Some links are affiliate links and I will receive some kind of commission if you purchase the service or product.</p>",
    );
};
