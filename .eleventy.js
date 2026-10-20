module.exports = function (eleventyConfig) {
    // Static assets: copy from src/... into the site at css/, js/, data/
    eleventyConfig.addPassthroughCopy({
        "src/css": "css",
        "src/js": "js",
        "src/data": "data",
    });

    // "Edit this page" link — derives the GitHub edit URL
    // from the source file being built (e.g. src/managing-money.md)
    eleventyConfig.addShortcode("editUrl", function (inputPath) {
        const path = inputPath.replace(/^\.\//, "");
        return `https://github.com/FOSS4CCCIs/tools/edit/main/${path}`;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["md", "njk"],
    };
};
