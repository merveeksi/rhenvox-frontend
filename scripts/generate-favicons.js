const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_SVG = path.join(__dirname, '../public/favicon.svg');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Ensure the favicon directory exists
if (!fs.existsSync(path.join(OUTPUT_DIR, 'favicon'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'favicon'), { recursive: true });
}

// Define sizes for different favicon formats
const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

// Read the SVG file
const svgBuffer = fs.readFileSync(SOURCE_SVG);

// Generate favicon.ico (multi-size ICO file)
async function generateFavicons() {
  console.log('Generating favicon files...');

  // Process each size
  for (const [filename, size] of Object.entries(sizes)) {
    console.log(`Creating ${filename} (${size}x${size})...`);
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(OUTPUT_DIR, filename));
  }

  // Copy SVG to root
  fs.copyFileSync(SOURCE_SVG, path.join(OUTPUT_DIR, 'favicon.svg'));

  // Generate favicon.ico (using the 32x32 PNG)
  console.log('Creating favicon.ico...');
  const png32 = path.join(OUTPUT_DIR, 'favicon-32x32.png');
  
  await sharp(png32)
    .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));

  console.log('All favicon files generated successfully!');
}

// Run the script
generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
}); 