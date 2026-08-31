import { prefersReducedMotion } from "../utils/dom.js";

const lines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'alef' },
  { type: 'cmd', text: 'cat role.txt' },
  { type: 'out', text: '> Front-end / Full Stack' },
  { type: 'out', text: '> React + TypeScript + Supabase' },
  { type: 'out', text: '> Building digital products...' },
];

export function initTerminal(containerId) {
  const body = document.getElementById(containerId);
  if(!body) return;

  function renderStatic(){
    body.innerHTML = lines.map(l => {
      if(l.type === 'cmd') return `<div><span class="prompt">$</span> <span class="type">${l.text}</span></div>`;
      return `<div class="out">${l.text}</div>`;
    }).join('') + '<div><span class="prompt">$</span> <span class="cursor-blink"></span></div>';
  }

  async function typeLine(el, text, speed=32){
    for(let i=0; i<=text.length; i++){
      el.textContent = text.slice(0,i);
      await new Promise(r => setTimeout(r, speed));
    }
  }

  async function runTerminal(){
    if(prefersReducedMotion()){ renderStatic(); return; }
    
    // Clear initial state
    body.innerHTML = '';
    
    for(const l of lines){
      const row = document.createElement('div');
      if(l.type === 'cmd'){
        row.innerHTML = `<span class="prompt">$</span> <span class="type"></span>`;
        body.appendChild(row);
        await typeLine(row.querySelector('.type'), l.text, 38);
        await new Promise(r => setTimeout(r, 220));
      } else {
        row.className = 'out';
        body.appendChild(row);
        await typeLine(row, l.text, 14);
        await new Promise(r => setTimeout(r, 120));
      }
    }
    const cursorRow = document.createElement('div');
    cursorRow.innerHTML = `<span class="prompt">$</span> <span class="cursor-blink"></span>`;
    body.appendChild(cursorRow);
  }
  
  runTerminal();
}
