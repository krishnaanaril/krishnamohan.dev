exports.config = {
  projectRoot: "./src",
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