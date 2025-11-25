import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  'union.png': 'https://www.figma.com/api/mcp/asset/30534b69-4e44-43e6-9184-a3792f3ef245',
  'vector14.png': 'https://www.figma.com/api/mcp/asset/98006149-ae73-41ab-a20c-885ace38b9d2',
  'vector15.png': 'https://www.figma.com/api/mcp/asset/2f7f9e50-2520-42d3-b797-eee0867c3b7d',
  'vector16.png': 'https://www.figma.com/api/mcp/asset/9aeeddb8-9621-44a4-8f69-f403de5ba61a',
  'vector13.png': 'https://www.figma.com/api/mcp/asset/ca92ad6d-5e5f-4c91-a03e-21c1655fdde2',
  'rectangle40289.png': 'https://www.figma.com/api/mcp/asset/ff80a750-2edb-4b42-ab30-508450e24d70',
  'rectangle40290.png': 'https://www.figma.com/api/mcp/asset/2e095d2c-1cac-4422-90bd-7ea289054e36',
  'rectangle40291.png': 'https://www.figma.com/api/mcp/asset/d3986bd0-19b2-4e14-a706-f15c763bd2e5',
  'rectangle40292.png': 'https://www.figma.com/api/mcp/asset/9110931e-97ef-4fd4-aea3-0e86470fb5bf',
  'cog.png': 'https://www.figma.com/api/mcp/asset/5ca391e7-6d45-4b6f-9403-07c769265b0a',
  'frame4154.png': 'https://www.figma.com/api/mcp/asset/f651884e-d945-4488-98b4-d91a172dcfb6',
  'frame1000003735.png': 'https://www.figma.com/api/mcp/asset/0f7ecd96-8c6b-4c23-8203-3b4c599a2c1d',
  'line6.png': 'https://www.figma.com/api/mcp/asset/c344d926-b910-4094-99f0-010bc8be79da',
  'frame4155.png': 'https://www.figma.com/api/mcp/asset/a4fa1235-fb03-487f-8534-13b6999960d6',
};

const outputDir = path.join(__dirname, '../public/assets/images/how-it-works');

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
  console.log('Downloading How It Works section images...\n');

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
