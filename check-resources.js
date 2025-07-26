// check-resources.js
const fs = require('fs');
const path = require('path');

const courseStructure = fs.readFileSync('data/courseStructure.ts', 'utf8');

// Extract all resource names from the course structure
const resourceRegex = /resources:\s*\[([^\]]*)\]/g;
let match;
const resourceNames = [];
while ((match = resourceRegex.exec(courseStructure)) !== null) {
  const items = match[1].split(',').map(r => r.replace(/['"`]/g, '').trim()).filter(Boolean);
  resourceNames.push(...items);
}

// Deduplicate
const uniqueResources = Array.from(new Set(resourceNames));

// Generate expected file names
function toFileName(resource) {
  return resource.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() + '.pdf';
}

const resourceDir = path.join(__dirname, 'public', 'resources');

console.log('--- Resource Audit Report ---');
let missing = 0, zeroKB = 0, ok = 0;
uniqueResources.forEach(resource => {
  const fileName = toFileName(resource);
  const filePath = path.join(resourceDir, fileName);
  let status = '';
  if (!fs.existsSync(filePath)) {
    status = 'MISSING';
    missing++;
  } else {
    const size = fs.statSync(filePath).size;
    if (size === 0) {
      status = 'ZERO KB';
      zeroKB++;
    } else {
      status = 'OK';
      ok++;
    }
  }
  console.log(`${fileName.padEnd(35)} : ${status}`);
});
console.log('-----------------------------');
console.log(`Total: ${uniqueResources.length}`);
console.log(`OK: ${ok}`);
console.log(`Missing: ${missing}`);
console.log(`Zero KB: ${zeroKB}`); 