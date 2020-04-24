const imagemin = require('imagemin'),
    webp = require("imagemin-webp"),   // imagemin's WebP plugin.
    outputFolder = "./assets/img",            // Output folder
    images = 'assets/img/*.{jpg,png}';        // PNG & JPEG images



(async () => {
    await imagemin([images], {
        destination: outputFolder,
        plugins: [
            webp({ quality: 50 })
        ]
    });

    console.log('Images optimized 1');
})();
