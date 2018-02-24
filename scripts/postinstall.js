const { copyFileSync } = require('fs'),
    { join } = require('path');

const cwd = process.env.INIT_CWD;
const PRETTIER_CONFIG_FILENAME = '.prettierrc.js';

const src = join(__dirname, '..', PRETTIER_CONFIG_FILENAME);
const dest = join(cwd, PRETTIER_CONFIG_FILENAME);

copyFileSync(src, dest);

console.log(`Copied ${src} to ${dest}.`);
