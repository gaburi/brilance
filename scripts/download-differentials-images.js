import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://www.figma.com/api/mcp/asset/10122d28-e1b7-4192-8d25-6ca33e017989',
    filename: 'differentials-logo.png'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/b1f7e9fa-40be-453a-9519-b86cbf851954',
    filename: 'wisdom-icon.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/4b21810d-2079-4312-8a17-0e6db190fdaf',
    filename: 'rocket-icon.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/872dea8e-8bac-4f9d-b03e-f3f80ec9dad2',
    filename: 'lightbulb-icon.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/682f50af-5de9-4fb5-86f4-7f44beabb5ee',
    filename: 'bullseye-icon.svg'
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/6f7b8e6e-f1d9-40f1-b30a-eb51f444ccf6',
    filename: 'handshake-icon.svg'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'differentials');

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
  console.log('Starting Differentials section image downloads...\n');

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${image.filename}:`, error.message);
    }
  }

  console.log('\nAll Differentials section images downloaded!');
})();
