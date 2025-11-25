/**
 * Download Images from Figma
 *
 * This script downloads all images from Figma API and saves them locally.
 * Run with: node scripts/download-images.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image URLs from Figma
const images = {
  'hero-background.png': 'https://www.figma.com/api/mcp/asset/0cf32700-b3ef-43b7-8d93-61deca4f45e2',
  'logo.png': 'https://www.figma.com/api/mcp/asset/37392397-a39c-4f29-98e3-d612ff6d5920',
  'mission-image.png': 'https://www.figma.com/api/mcp/asset/bc8b43c1-35af-4f1d-ba19-7328cab57e51',
  'target-audience.png': 'https://www.figma.com/api/mcp/asset/37d0fa80-fa05-48e0-901b-e7f28de6a4c2',
  'differentials-center.png': 'https://www.figma.com/api/mcp/asset/8e96c0b5-d0e5-4d1d-9e9a-3c2f5d8b7a6e',
  'cta-image.png': 'https://www.figma.com/api/mcp/asset/9f8a7b6c-5d4e-3f2a-1b0c-9e8d7c6b5a4f',
  'testimonial-1.png': 'https://www.figma.com/api/mcp/asset/3dfc58a0-8aa5-4b2c-976f-0e92f579ad9c',
  'testimonial-2.png': 'https://www.figma.com/api/mcp/asset/d3b6f587-a6ed-4a19-80f2-d2047c9b658a',
  'testimonial-3.png': 'https://www.figma.com/api/mcp/asset/3cb174e5-b419-4676-a4f0-ec1ecea2924a',
  'testimonial-4.png': 'https://www.figma.com/api/mcp/asset/f0ef638a-4ca4-4e48-9973-ae8bdcb895f2',
  'union3.png': 'https://www.figma.com/api/mcp/asset/b23f451c-c023-4ee4-a76d-0ca9c772fa1f',
  'frame21.png': 'https://www.figma.com/api/mcp/asset/56d31aef-18c0-4d3c-8360-4addd0ebbebb',
  'no-bg-1.png': 'https://www.figma.com/api/mcp/asset/5f21d0f4-f572-4bd7-ab61-b615d918ce86',
  'image27.png': 'https://www.figma.com/api/mcp/asset/f1461e45-9aa8-40cf-9215-514dafaf0415',
  'rectangle53.png': 'https://www.figma.com/api/mcp/asset/3660ad24-ac60-481d-8ae4-a8c7096d0691',
  'mask-group.png': 'https://www.figma.com/api/mcp/asset/761eeff1-e628-4f19-a6fc-7f88c6297d57',
  'school.png': 'https://www.figma.com/api/mcp/asset/062250f4-f5e5-4de1-b555-829d001a5933',
  'mask-group-1.png': 'https://www.figma.com/api/mcp/asset/3b0be6c3-68e8-4618-ad26-f88a6fcdde66',
  'frame.png': 'https://www.figma.com/api/mcp/asset/5adbf997-0dd8-4ddc-b529-50a3f8df6499',
  'icon-cog.png': 'https://www.figma.com/api/mcp/asset/1e078d0c-fb63-44b5-a5cd-8a488eca93e3',
  'icon-wisdom.png': 'https://www.figma.com/api/mcp/asset/c0f00631-ecb8-44d4-915a-90af14ca7b48',
  'icon-rocket.png': 'https://www.figma.com/api/mcp/asset/e2fad520-0346-4384-b77f-6cab3ead48db',
  'icon-bullseye.png': 'https://www.figma.com/api/mcp/asset/8892827a-47cf-4d59-b0b5-e3fbc66d48d0',
  'icon-compass.png': 'https://www.figma.com/api/mcp/asset/093b44b2-8b64-4eda-86ea-4bd037825b75',
  'icon-lightbulb.png': 'https://www.figma.com/api/mcp/asset/1cfbc295-d34c-441f-8ccd-57dce5d9d257',
  'icon-account-plus.png': 'https://www.figma.com/api/mcp/asset/58ac8dfc-a510-45ae-960f-a74400c575b4',
  'icon-code.png': 'https://www.figma.com/api/mcp/asset/62e6ddd4-6ccc-48a1-bd07-99a3360e6f42',
  'mask-group-2.png': 'https://www.figma.com/api/mcp/asset/f003190c-4b3e-45ed-b9cc-3e26b171912c',
  'frame110.png': 'https://www.figma.com/api/mcp/asset/ecc40c35-a713-45b1-8197-270b80cd65cf',
  'mask-group-3.png': 'https://www.figma.com/api/mcp/asset/da1fe019-d4e5-4be8-9e41-33cf546c3708',
};

// Output directory
const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ Created directory: ${outputDir}`);
}

// Download a single image
const downloadImage = (filename, url) => {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, filename);

    console.log(`⬇️  Downloading: ${filename}...`);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });

        fileStream.on('error', (err) => {
          fs.unlink(outputPath, () => {}); // Delete partial file
          reject(err);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        const redirectUrl = response.headers.location;
        console.log(`🔄 Redirecting: ${filename} -> ${redirectUrl}`);
        https.get(redirectUrl, (redirectResponse) => {
          if (redirectResponse.statusCode === 200) {
            const fileStream = fs.createWriteStream(outputPath);
            redirectResponse.pipe(fileStream);

            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`✅ Downloaded: ${filename}`);
              resolve();
            });

            fileStream.on('error', (err) => {
              fs.unlink(outputPath, () => {});
              reject(err);
            });
          } else {
            reject(new Error(`Failed to download ${filename}: ${redirectResponse.statusCode}`));
          }
        }).on('error', reject);
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

// Download all images
const downloadAll = async () => {
  console.log('🚀 Starting image download from Figma...\n');
  console.log(`📁 Output directory: ${outputDir}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(filename, url);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error.message);
      failCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Successfully downloaded: ${successCount}/${Object.keys(images).length} images`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} images`);
  }
  console.log('='.repeat(50));
};

// Run the download
downloadAll().catch(console.error);
