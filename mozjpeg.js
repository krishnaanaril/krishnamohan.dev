const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const outputFolder = "./src/assets/images/mozjpeg";            // Output folder
const images = './src/assets/images/*.{jpeg,jpg,png}'; 

(async () => {
	await imagemin([images], {
		destination: outputFolder,
		plugins: [
			imageminMozjpeg()
		]
	});

	console.log('Images optimized');
})();