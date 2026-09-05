const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Hero.tsx',
  'src/components/Project.tsx'
];

files.forEach(file => {
  const filePath = path.join('c:/Users/aleff/OneDrive/Documents/alef.dev', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all unknown characters mapping back to correct words if we can find them.
    content = content.replace(/Disponvel|Dispon.vel/g, 'Disponível');
    content = content.replace(/solu.es|solues/g, 'soluções');
    content = content.replace(/escal.veis|escalveis/g, 'escaláveis');
    content = content.replace(/C.digo|Cdigo/g, 'Código');
    content = content.replace(/solu.o|soluǜo|soluo/g, 'solução');
    content = content.replace(/incr.vel|incrvel/g, 'incrível');
    content = content.replace(/c.digo|cdigo/g, 'código');

    content = content.replace(/Constru.es/g, 'Construções');
    content = content.replace(/nico|.nico/g, 'único');
    content = content.replace(/atrav.s|atravs/g, 'através');
    content = content.replace(/DEMONSTRA.*O/g, 'DEMONSTRAÇÃO');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
