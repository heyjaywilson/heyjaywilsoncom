module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/*");
  eleventyConfig.addGlobalData("currentYear", () => (new Date()).getFullYear());

  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};