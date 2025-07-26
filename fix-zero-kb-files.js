// fix-zero-kb-files.js
const fs = require('fs');
const path = require('path');

// Create a simple PDF placeholder content
const placeholderPDFContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 24 Tf
100 700 Td
(Coming Soon) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000256 00000 n 
0000000326 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
384
%%EOF`;

const resourceDir = path.join(__dirname, 'public', 'resources');

// Get all PDF files in the resources directory
const files = fs.readdirSync(resourceDir).filter(file => file.endsWith('.pdf'));

let fixed = 0;
let skipped = 0;

console.log('--- Fixing 0KB PDF Files ---');

files.forEach(file => {
  const filePath = path.join(resourceDir, file);
  const stats = fs.statSync(filePath);
  
  if (stats.size === 0) {
    // Replace 0KB file with placeholder PDF
    fs.writeFileSync(filePath, placeholderPDFContent);
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  Skipped: ${file} (${stats.size} bytes)`);
    skipped++;
  }
});

console.log('----------------------------');
console.log(`Fixed: ${fixed} files`);
console.log(`Skipped: ${skipped} files`);
console.log('All 0KB PDFs have been replaced with valid placeholder PDFs!'); 