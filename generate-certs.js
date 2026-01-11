import selfsigned from 'selfsigned';
import { writeFileSync } from 'fs';

console.log('Generating self-signed certificate for localhost...');

const attrs = [
  { name: 'commonName', value: 'localhost' },
  { name: 'countryName', value: 'US' },
];

const options = {
  keySize: 2048,
  days: 365,
};

selfsigned.generate(attrs, options).then(pems => {
  try {
    writeFileSync('localhost.pem', pems.cert);
    writeFileSync('localhost-key.pem', pems.private);
    
    console.log('✓ localhost.pem created');
    console.log('✓ localhost-key.pem created');
    console.log('\nNote: This is a self-signed certificate. Browsers will show a warning.');
  } catch (err) {
    console.error('Error writing files:', err.message);
    process.exit(1);
  }
}).catch(err => {
  console.error('Error generating certificates:', err.message);
  process.exit(1);
});
