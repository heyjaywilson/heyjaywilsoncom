const ExcerptGenerator = require("./_scripts/excerptGenerator");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  const english = new Intl.DateTimeFormat("en");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/assets/images/*");
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());
  eleventyConfig.setServerOptions({
    watch: ["./src/assets/css/styles.css"],
  });

  eleventyConfig.addFilter("excerpt", (content) =>
    new ExcerptGenerator().getExcerpt(content, 200)
  );
  eleventyConfig.addFilter("niceDate", function (d) {
    return english.format(d);
  });
  eleventyConfig.addFilter("encodeURI", (url) => {
    return encodeURIComponent(url)
  })
  eleventyConfig.addFilter("shortenLink", (text) => {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      return '';
  });
  })
  eleventyConfig.addFilter("makeMDLink", (text) => {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + '</a>';
  });
  })

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "../_data",
      includes: "../_includes",
    },
    pathPrefix: "/",
  };
};
