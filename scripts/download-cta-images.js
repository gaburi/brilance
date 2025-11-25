import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://www.figma.com/api/mcp/asset/63397b5a-e4c3-4a25-9b6d-2888befca1eb',
    filename: 'cta-woman.png'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/3ab0cf08-08d2-42d7-9210-b44fceaaffe2',
    filename: 'cta-card-frame.png'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/0af63f99-32dd-4dc6-a4ee-0769d418bf59',
    filename: 'cta-button-mask.svg'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'cta');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, filename);

    console.log(`Downloading ${filename}...`);

    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log(`Following redirect for ${filename}...`);
        return downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Download all images
(async () => {
  console.log('Starting CTA section image downloads...\n');

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${image.filename}:`, error.message);
    }
  }

  console.log('\nAll CTA section images downloaded!');
})();
