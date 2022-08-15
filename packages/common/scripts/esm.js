const fs = require('fs');
const path = require('path');

const esmPath = path.resolve(__dirname, '../tsconfig.esm.json');
const tsConfigPath = path.resolve(__dirname, '../tsconfig.json');

fs.readFile(esmPath, 'utf-8', (error, data) => {
  fs.writeFile(tsConfigPath, data, () => {});
});
