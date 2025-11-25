import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://www.figma.com/api/mcp/asset/68652c60-9e51-4b4e-b6fc-e4bdf2ef5db3',
    filename: 'forwhom-image.png'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/a6175cf9-684a-48aa-a5c1-4fe9f8c91616',
    filename: 'compass-outline.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/35b2eabd-1c3e-4053-bfd1-faffdd88256c',
    filename: 'lightbulb-on.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/9ab02847-3834-4623-b288-4d974eb64375',
    filename: 'account-plus-outline.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/fdaf9674-bcb3-4839-98e4-d89f9309aa83',
    filename: 'code-block-tags.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/30cc38a2-e529-46af-b598-9b27aa269b98',
    filename: 'line-divider.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/e3f0c0c7-274e-4987-90a9-2e49f17e1d7e',
    filename: 'forwhom-mask-group.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/f2aaea09-247b-4599-ad58-8536bcbb19da',
    filename: 'forwhom-grid-vector.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/56ff4ca9-c724-40c7-802e-6bbf3002f7a6',
    filename: 'forwhom-grid-vector2.svg'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'forwhom');

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
  console.log('Starting ForWhom section image downloads...\n');

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${image.filename}:`, error.message);
    }
  }

  console.log('\nAll ForWhom section images downloaded!');
})();
