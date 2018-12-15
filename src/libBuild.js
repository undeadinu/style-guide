const file = require('file');
const path = require('path');
const fs = require('fs');

const srcPath = path.resolve(__dirname) + path.sep;

console.log(srcPath);
const startPath = path.resolve(__dirname, 'components');
const endPath = path.resolve(__dirname, 'framerX.js');
const contents = [];

file.walk(startPath, (_, dirPath, dirs, _files) => {
  if (!dirPath.includes('pages')) {
    const componentsPaths = _files.map(f => {
      if (!f.includes('spec') && f.endsWith('.jsx')) {
        return f.replace(srcPath, '');
      }
    }).filter(c => c);
    
    componentsPaths.forEach(c => {
      const fileName = path.basename(c, '.jsx');

      contents.push(`import ${fileName}, * as ${fileName}Options from '${c}';`);
    });
  }


  fs.writeFileSync(endPath, contents.join('\n'));
});
