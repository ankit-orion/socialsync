const { execSync } = require('child_process');
const fs = require('fs');
try {
  const output = execSync('npm run build', { encoding: 'utf8' });
  fs.writeFileSync('error.log', 'SUCCESS:\n' + output);
} catch (e) {
  fs.writeFileSync('error.log', 'ERROR:\n' + e.stdout + '\nSTDERR:\n' + e.stderr);
}
