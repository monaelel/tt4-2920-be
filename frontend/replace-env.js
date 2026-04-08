const fs = require('fs');

const apiUrl = process.env.RENDER_EXTERNAL_URL || process.env.API_URL || 'https://tt4-2920-be.onrender.com';

const envFile = `export const environment = {
  apiUrl: '${apiUrl}'
};
`;

fs.writeFileSync('./src/environments/environment.ts', envFile);
console.log('Environment updated with API_URL:', apiUrl);
