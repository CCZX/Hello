const fs = require('fs');
const path = require('path');

const cjsPath = path.resolve(__dirname, '../tsconfig.cjs.json');
const tsConfigPath = path.resolve(__dirname, '../tsconfig.json');

fs.readFile(cjsPath, 'utf-8', (error, data) => {
  fs.writeFile(tsConfigPath, data, () => {});
});
