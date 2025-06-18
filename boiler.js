// import { mkdir } from 'node:fs';

const fs = require('node:fs');

const folderName = process.argv[2] || 'project';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/app.css`, '');
    console.log('berhasil');
} catch (error) {
    console.log('error');
}

console.log('setelah fungsi mkdir');
