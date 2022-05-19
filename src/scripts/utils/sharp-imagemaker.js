// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../../public/images/heros');
const destination = path.resolve(__dirname, '../../../dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // membuat gambar dengan ukuran dengan lebar 800px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ),
    );

  // membuat gambar dengan ukuran dengan lebar 480px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );

  // membuat gambar dengan ukuran dengan lebar 600px, dengan prefix -medium.jpg

  sharp(`${target}/${image}`)
    .resize(600)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
      ),
    );
});