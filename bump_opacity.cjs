const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Bump text opacity
      content = content.replace(/text-\[\#0d0d0d\]\/10/g, 'text-[#0d0d0d]/40');
      content = content.replace(/text-\[\#0d0d0d\]\/2[0-5]/g, 'text-[#0d0d0d]/60');
      content = content.replace(/text-\[\#0d0d0d\]\/3[0-5]/g, 'text-[#0d0d0d]/60');
      content = content.replace(/text-\[\#0d0d0d\]\/4[0-5]/g, 'text-[#0d0d0d]/70');
      content = content.replace(/text-\[\#0d0d0d\]\/5[0-5]/g, 'text-[#0d0d0d]/70');
      
      // Bump missing dark support in some border/white areas? 
      // The CSS file takes care of border-[#0d0d0d]/[0.0x].
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Opacity bump complete.');
