const https = require('https');
const fs = require('fs');
const path = require('path');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadMissingImages() {
  const outputDir = '/workspaces/saumrs/frontend/public/images';
  
  const imagesToDownload = [
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/06/microscope-with-flasks-and-vials-chemistry-labratory-tools--1024x768.jpg',
      name: 'microscope-lab-equipment.jpg'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/08/Every_Human_is_Different-transformed.jpeg',
      name: 'Every_Human_is_Different-transformed.jpeg'
    }
  ];

  console.log('Downloading additional images...\n');

  for (const image of imagesToDownload) {
    try {
      const filepath = path.join(outputDir, image.name);
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
    }
  }

  console.log('\n✓ Additional images downloaded!');
}

downloadMissingImages();
