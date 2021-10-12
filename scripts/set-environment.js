/**
 * Node.js script to copy the choosen
 * .env file when running the app.
 */

const fs = require('fs');
const path = require('path');

const arg = process.argv[2];
const flavour = arg.replace('--', '');

fs.copyFile(
  path.resolve(__dirname, '..', `.env.${flavour}`),
  path.resolve(__dirname, '..', '.env'),
  error => {
    if (error) throw error;
    console.log('Environment variables setted');
  }
);
