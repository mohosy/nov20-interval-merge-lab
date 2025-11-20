const ui=document.getElementById('ui');const out=document.getElementById('out');
ui.innerHTML='<textarea id="inp">1-3,2-6,8-10,9-12</textarea><button id="merge">Merge</button>';
function parse(){return document.getElementById('inp').value.split(',').map(x=>x.trim()).filter(Boolean).map(p=>{const [a,b]=p.split('-').map(Number);return [Math.min(a,b),Math.max(a,b)]}).filter(([a,b])=>!Number.isNaN(a)&&!Number.isNaN(b)).sort((x,y)=>x[0]-y[0]);}
function merge(a){if(!a.length)return [];const out=[a[0]];for(const cur of a.slice(1)){const last=out[out.length-1];if(cur[0]<=last[1])last[1]=Math.max(last[1],cur[1]);else out.push(cur);}return out;}
function run(){const p=parse();const m=merge(p);out.textContent=`Input: ${JSON.stringify(p)}\nMerged: ${JSON.stringify(m)}`;}
ui.onclick=e=>{if(e.target.id==='merge')run()};run();
