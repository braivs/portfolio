const fs = require('fs');
const path = require('path');

// Read build/index.html to get current file names
const buildIndexPath = path.join(__dirname, '..', 'build', 'index.html');
const build404Path = path.join(__dirname, '..', 'build', '404.html');

if (!fs.existsSync(buildIndexPath)) {
  console.error('build/index.html not found. Run yarn build first');
  process.exit(1);
}

if (!fs.existsSync(build404Path)) {
  console.error('build/404.html not found. Make sure public/404.html exists');
  process.exit(1);
}

const buildIndex = fs.readFileSync(buildIndexPath, 'utf8');
const build404 = fs.readFileSync(build404Path, 'utf8');

// Extract JS and CSS file names from build/index.html
const jsMatch = buildIndex.match(/src="([^"]*\.js)"/);
const cssMatch = buildIndex.match(/href="([^"]*\.css)"/);

if (!jsMatch || !cssMatch) {
  console.error('Failed to find JS or CSS files in build/index.html');
  process.exit(1);
}

const jsFile = jsMatch[1];
const cssFile = cssMatch[1];

// Update build/404.html with current file names
const updated404 = build404
  .replace(/src="[^"]*\.js"/, `src="${jsFile}"`)
  .replace(/href="[^"]*\.css"/, `href="${cssFile}"`);

fs.writeFileSync(build404Path, updated404, 'utf8');
console.log('✅ build/404.html updated with current file names');
console.log(`   JS: ${jsFile}`);
console.log(`   CSS: ${cssFile}`);
