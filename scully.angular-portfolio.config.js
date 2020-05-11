const {webpImagesPlugin} = require("scully-plugin-webpimages");

const postRenderers = ['webpimages'];

exports.config = {
  projectRoot: "./src",
  defaultPostRenderers: postRenderers,
  projectName: "angular-portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mdblog"
      }
    },
  }
};