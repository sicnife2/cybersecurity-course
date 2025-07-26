const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const tsFile = path.join(__dirname, 'data', 'courseStructure.ts');
const fileContent = fs.readFileSync(tsFile, 'utf8');

const resourceRegex = /resources:\s*\[([^\]]+)\]/g;
const resourceSet = new Set();
let match;
while ((match = resourceRegex.exec(fileContent)) !== null) {
  const arr = match[1]
    .split(',')
    .map(s => s.replace(/['"`]/g, '').trim())
    .filter(Boolean);
  arr.forEach(r => resourceSet.add(r));
}

const resourceNames = Array.from(resourceSet);
const resourceDir = path.join(__dirname, 'public', 'resources');
if (!fs.existsSync(resourceDir)) fs.mkdirSync(resourceDir, { recursive: true });

function toFileName(resource) {
  return resource.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() + '.pdf';
}

for (const resource of resourceNames) {
  const fileName = toFileName(resource);
  const filePath = path.join(resourceDir, fileName);
  if (!fs.existsSync(filePath)) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(20).text(resource, { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text('This is a placeholder for the resource: ' + resource, { align: 'center' });
    doc.end();
    console.log('Created:', fileName);
  } else {
    console.log('Exists:', fileName);
  }
} 