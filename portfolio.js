const projects=[...document.querySelectorAll('.project')];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 projects.forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;if(p.hidden)p.querySelectorAll('video').forEach(v=>v.pause());});
 document.getElementById('filter-status').textContent=projects.filter(p=>!p.hidden).length+' projects shown';
}));
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-video]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));const panel=document.getElementById('haptic-'+b.dataset.video);panel.hidden=!active;panel.querySelector('video').pause();});
}));
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
const dialog=document.getElementById('demo-dialog');
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('video').forEach(v=>v.pause());
 document.getElementById('demo-title').textContent=button.dataset.title;
 document.getElementById('demo-external').href=button.dataset.demo;
 const frame=document.createElement('iframe');frame.src=button.dataset.demo;frame.title=button.dataset.title;frame.allow='camera; fullscreen';frame.referrerPolicy='strict-origin-when-cross-origin';
 document.getElementById('demo-frame').replaceChildren(frame);dialog.showModal();document.body.style.overflow='hidden';
}));
document.getElementById('close-demo').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.getElementById('demo-frame').replaceChildren();document.body.style.overflow='';});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
