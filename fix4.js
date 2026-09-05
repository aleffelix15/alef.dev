import fs from 'fs';
let c = fs.readFileSync('src/components/Hero.tsx', 'utf8');

c = c.replace(/<pre className="font-mono text-\[13px\] leading-\[1\.7\]">[\s\S]*?<\/pre>/, <pre className="font-mono text-[13px] leading-[1.7]">
                  <code>
                    <span className="text-[#0066FF]">const</span> <span className="text-[#F5F5F5]">developer</span> <span className="text-[#0066FF]">=</span> {'{'}<br/>
                    {'  '}<span className="text-[#71717A]">name:</span> <span className="text-[#00C853]">'Alef Felix'</span>,<br/>
                    {'  '}<span className="text-[#71717A]">role:</span> <span className="text-[#00C853]">'Desenvolvedor Full Stack'</span>,<br/>
                    {'  '}<span className="text-[#71717A]">focus:</span> [<span className="text-[#00C853]">'React'</span>, <span className="text-[#00C853]">'Node.js'</span>, <span className="text-[#00C853]">'TypeScript'</span>],<br/>
                    {'  '}<span className="text-[#71717A]">learning:</span> <span className="text-[#00C853]">'Todos os dias'</span><br/>
                    {'}'}<br/><br/>
                    <span className="text-[#0066FF]">function</span> <span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#FF9500]">ideia</span>) {'{'}<br/>
                    {'  '}<span className="text-[#0066FF]">return</span> <span className="text-[#00C853]">{\/* -> c\u00F3digo -> solu\u00E7\u00E3o -> impacto */\}</span>;<br/>
                    {'}'}<br/><br/>
                    <span className="text-[#F5F5F5]">console</span>.<span className="text-[#0066FF]">log</span>(<span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#00C853]">'Sua ideia!'</span>));<br/>
                    <span className="text-[#71717A]">// Vamos construir algo incr\u00EDvel juntos! \uD83D\uDE80</span>
                  </code>
                </pre>);
fs.writeFileSync('src/components/Hero.tsx', c, 'utf8');
