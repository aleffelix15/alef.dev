import fs from 'fs';
let c = fs.readFileSync('src/components/Project.tsx', 'utf8');

const targetRegex = /<h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-\[#F5F5F5\] tracking-tight">[\s\S]*?<\/p>/;
const header = '<h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">\n              Projetos & Construções\n            </h2>\n          </div>\n          <p className="font-body text-[0.9375rem] text-[#71717A] max-w-sm md:text-right">\n            Cada projeto representa um desafio único e uma oportunidade de aprender, construir e gerar impacto real através de código.\n          </p>';

c = c.replace(targetRegex, header);
c = c.replace(/\{\/\* DEMONSTRA.*O \*\/\}/g, '{/* DEMONSTRAÇÃO */}');
fs.writeFileSync('src/components/Project.tsx', c, 'utf8');
