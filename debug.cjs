const { execSync } = require('child_process');
const fs = require('fs');
try {
  console.log("Starting build...");
  const output = execSync('npm run build', { encoding: 'utf8' });
  console.log("Success!");
  fs.writeFileSync('error.log', 'SUCCESS:\n' + output);
} catch (e) {
  console.log("Caught Error!");
  fs.writeFileSync('error.log', 'ERROR:\n' + e.stdout + '\nSTDERR:\n' + e.stderr);
}
