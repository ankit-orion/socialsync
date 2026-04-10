const fs = require('fs');

const file = 'src/components/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');
const replacement = fs.readFileSync('tmp/new_hero.txt', 'utf8');

const regex = /\/\*\s*──\s*Instagram screen\s*──\s*\*\/[\s\S]*?(?=const SCREENS = \[InstagramScreen)/;

if (regex.test(content)) {
  content = content.replace(regex, replacement + '\n\n');
  fs.writeFileSync(file, content);
  console.log('Replaced successfully!');
} else {
  console.error('Could not find target section in file.');
  process.exit(1);
}
