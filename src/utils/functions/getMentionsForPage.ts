import { getCollection, type CollectionEntry } from "astro:content";
import { type WebMention, enums } from "../types/Webmention";

interface WebMentionData {
  allMentions: Array<WebMention>;
  replies: Array<WebMention>;
  reposts: Array<WebMention>;
  likes: Array<WebMention>;
  bookmarks: Array<WebMention>;
  mentions: Array<WebMention>;
  rsvp: Array<WebMention>;
}

const getMentionsForPage = async (slug: string) => {
  let formattedSlug = formatSlugToID(slug);
  let allMentions: CollectionEntry<"webmentions">[] =
    await getCollection("webmentions");

  let containerMentions: WebMention[][] = allMentions
    .filter((a) => a.id === formattedSlug)
    .map((a) => a.data);

  let data: WebMentionData = {
    allMentions: Array<WebMention>(),
    replies: Array<WebMention>(),
    reposts: Array<WebMention>(),
    likes: Array<WebMention>(),
    bookmarks: Array<WebMention>(),
    mentions: Array<WebMention>(),
    rsvp: Array<WebMention>(),
  };
  if (containerMentions.length == 0) {
    return data;
  } else {
    let mentions = containerMentions[0].filter((a) => a.wmPrivate != true);
    data.allMentions = mentions;
    console.log(data.allMentions);
    data.replies = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum["in-reply-to"],
    );
    data.likes = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum["like-of"],
    );
    data.reposts = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum["repost-of"],
    );
    data.bookmarks = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum["bookmark-of"],
    );
    data.mentions = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum["mention-of"],
    );
    data.rsvp = mentions.filter(
      (a) => a.wmProperty == enums.wmProperty.enum.rsvp,
    );
    return data;
  }
};

function formatSlugToID(slug: string) {
  if (slug === "/") {
    return "home";
  }
  let formatted = slug.replace(/\/$/, "").replaceAll("/", "_");
  while (formatted.charAt(0) === "_") {
    formatted = formatted.substring(1);
  }
  return formatted;
}

export { getMentionsForPage };
export type { WebMentionData };
