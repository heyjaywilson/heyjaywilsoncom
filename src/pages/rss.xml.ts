import MarkdownIt from 'markdown-it';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const parser = new MarkdownIt();

export const get = async () => {
  const allBlogposts = await getCollection('blog');
  const sortedPosts = allBlogposts.sort(
    (a, b) =>
      new Date(b.data.updatedDate ?? b.data.pubDate).valueOf() -
      new Date(a.data.updatedDate ?? a.data.pubDate).valueOf()
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: 'https://heyjaywilson.com',
    items: sortedPosts.map((post) => ({
      link: `/blog/${post.slug}`,
      content: removeJSX(parser.render(post.body)),
      title: post.data.metatitle ?? post.data.title,
      pubDate: post.data.updatedDate ?? post.data.pubDate,
      author: `heyjay@cctplus.dev`,
    })),
  });
};

const removeJSX = (html: string) => {
  return html
    .replace(/<p>import\s(StaticTweet|Video)\sfrom\s'.*'<\/p>/gm, '')
    .replace(/<p>&lt;(Video|StaticTweet).*\/&gt;<\/p>/gm, '');
};
