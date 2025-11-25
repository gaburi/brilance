import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mission section images from Figma
const images = {
  'mission-image.png': 'https://www.figma.com/api/mcp/asset/7d23df00-694c-4e4c-8459-553f113cfc3c',
  'mission-grid-vector.png': 'https://www.figma.com/api/mcp/asset/61f1c5fb-ff07-4ae1-9dc4-cf33296f07dc',
  'mission-grid-vector2.png': 'https://www.figma.com/api/mcp/asset/138d55da-855f-437c-9511-ee8de086a0ab',
  'mission-school-icon.png': 'https://www.figma.com/api/mcp/asset/c1cb8cb0-3c19-4f30-9921-18c43b0cc05b',
  'mission-mask-group.png': 'https://www.figma.com/api/mcp/asset/528f42f1-a971-406e-8ed3-7155d0c51c06',
  'mission-arrow-frame.png': 'https://www.figma.com/api/mcp/asset/affcc957-7f1d-4261-8abb-ef0d23729166',
};

const outputDir = path.join(__dirname, '../public/assets/images/mission');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(outputDir, filename);

    https.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirectResponse) => {
          const file = fs.createWriteStream(filepath);
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded: ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      console.error(`✗ Failed: ${filename} - ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading Mission section images...\n');

  const downloads = Object.entries(images).map(([filename, url]) =>
    downloadImage(url, filename)
  );

  try {
    await Promise.all(downloads);
    console.log(`\n✓ Successfully downloaded ${Object.keys(images).length} images!`);
  } catch (error) {
    console.error('\n✗ Some downloads failed:', error);
  }
}

downloadAllImages();
