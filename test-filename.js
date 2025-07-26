// Test file name transformation
const resources = ['NIST Framework', 'CISA Essentials', 'Security basics guide', 'TCP/IP reference'];

resources.forEach(resource => {
  const fileName = resource.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() + '.pdf';
  console.log(`"${resource}" -> "${fileName}"`);
}); 