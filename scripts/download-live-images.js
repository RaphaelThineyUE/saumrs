const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

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

async function downloadLiveImages() {
  const outputDir = '/workspaces/saumrs/frontend/public/images';
  
  // Key images from live site
  const imagesToDownload = [
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/07/Header-1.png',
      name: 'Header-1.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/07/Product-Highlight.png',
      name: 'Product-Highlight.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/06/spirulina-powder-1024x867.jpg',
      name: 'spirulina-powder-1024x867.jpg'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/06/1000_F_247149734_zI46ctky7a7iBzWMS2SHqtWfKQX8ADrz.png',
      name: 'athlete-image.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/07/Bundle-and-Save-Scene.png',
      name: 'Bundle-and-Save-Scene.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/08/Protein-Pak-CARD.png',
      name: 'Protein-Pak-CARD.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/07/We-Made-This-for-You-Scene.png',
      name: 'We-Made-This-for-You-Scene.png'
    },
    {
      url: 'https://www.saumrs.com/wp-content/uploads/2023/07/Highlights.png',
      name: 'Highlights.png'
    }
  ];

  console.log('Starting image downloads...\n');

  for (const image of imagesToDownload) {
    try {
      const filepath = path.join(outputDir, image.name);
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
    }
  }

  console.log('\n✓ All images downloaded successfully!');
}

downloadLiveImages();
