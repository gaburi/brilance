import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Updated URLs from latest Figma export
const images = {
  'union.png': 'https://www.figma.com/api/mcp/asset/7661e92d-9e06-4763-af4c-f5cc96c16ff3',
  'vector14.png': 'https://www.figma.com/api/mcp/asset/75c299ea-9cda-4fb0-9f7b-347657b70a8a',
  'vector15.png': 'https://www.figma.com/api/mcp/asset/1ae22a0e-4c25-49b9-b075-82f18afe7f2d',
  'vector16.png': 'https://www.figma.com/api/mcp/asset/70172020-8b3c-4b14-931c-6f4c908e8cf9',
  'vector13.png': 'https://www.figma.com/api/mcp/asset/148d63bb-a23c-4bbf-acc0-daa3258ed22c',
  'rectangle40289.png': 'https://www.figma.com/api/mcp/asset/1a97ddc6-9b72-4706-ab83-e063ade0eedd',
  'rectangle40290.png': 'https://www.figma.com/api/mcp/asset/d3c624c4-185e-48fa-94b0-77bbfb420be8',
  'rectangle40291.png': 'https://www.figma.com/api/mcp/asset/8510764d-b701-4df4-9c9f-e926bbaf8208',
  'rectangle40292.png': 'https://www.figma.com/api/mcp/asset/b605e20e-c9e3-4ec2-b0dc-43e02006d6c5',
  'cog.png': 'https://www.figma.com/api/mcp/asset/0f057c04-d980-4853-8487-10bc61e6a10b',
  'frame4154.png': 'https://www.figma.com/api/mcp/asset/c4177528-2d59-4788-9513-2fa2d84554f0',
  'frame1000003735.png': 'https://www.figma.com/api/mcp/asset/281a8278-6cee-47f1-8ba4-0c7586c7ab37',
  'line6.png': 'https://www.figma.com/api/mcp/asset/3df8b24f-dea3-4da3-9b90-8c2a361b52ec',
  'frame4155.png': 'https://www.figma.com/api/mcp/asset/b6f59493-20be-46f7-ae77-7fabbc0a4329',
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
  console.log('Re-downloading How It Works section images with updated URLs...\n');

  const downloads = Object.entries(images).map(([filename, url]) =>
    downloadImage(url, filename)
  );

  try {
    await Promise.all(downloads);
    console.log(`\n✓ Successfully re-downloaded ${Object.keys(images).length} images!`);
  } catch (error) {
    console.error('\n✗ Some downloads failed:', error);
  }
}

downloadAllImages();
