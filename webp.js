const imagemin = require('imagemin'),
    webp = require("imagemin-webp"),   // imagemin's WebP plugin.
    outputFolder = "./src/assets/banners",            // Output folder
    images = './src/assets/banners/*.{jpeg,jpg,png}';        // PNG & JPEG images



(async () => {
    await imagemin([images], {
        destination: outputFolder,
        plugins: [
            webp({ quality: 50 })
        ]
    });
    console.log('Images optimized.');
})();
