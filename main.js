// Mobile menu
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)})}

// Flooring colour picker
const floors=[
 {n:'Natural Oak',c:'#c9a26b',d:'Light and warm. Suits almost any room.'},
 {n:'Honey Maple',c:'#d9b47a',d:'Bright golden tone that opens up small spaces.'},
 {n:'Whitewash',c:'#d8d3c8',d:'Soft, airy and Scandinavian in feel.'},
 {n:'Ash Grey',c:'#a8a196',d:'A calm neutral that pairs with modern interiors.'},
 {n:'Smoky Hickory',c:'#7d6b5a',d:'Mid-tone with strong, rustic grain.'},
 {n:'Warm Walnut',c:'#6b4730',d:'Rich and classic. Great for living areas.'},
 {n:'Charcoal Oak',c:'#4a4642',d:'Dark and dramatic with a matte finish.'},
 {n:'Espresso',c:'#3b2a20',d:'Our deepest brown, for a bold, elegant look.'}
];
const list=document.getElementById('swatches'),prev=document.getElementById('preview');
if(list&&prev){
 floors.forEach((f,i)=>{
  const li=document.createElement('li');
  li.innerHTML=`<button class="sw wood" style="--c:${f.c}" aria-pressed="false" aria-label="${f.n}"></button><span class="swname">${f.n}</span>`;
  li.firstChild.addEventListener('click',()=>show(i));list.appendChild(li);
 });
 function show(i){
  const f=floors[i];prev.style.setProperty('--c',f.c);
  prev.innerHTML=`<div><h3>${f.n}</h3><p>${f.d}</p></div>`;
  list.querySelectorAll('.sw').forEach((b,j)=>b.setAttribute('aria-pressed',j===i));
 }
 show(0);
}

// Before / after sliders
document.querySelectorAll('.ba').forEach(b=>{
 const r=b.querySelector('input'),a=b.querySelector('.after'),h=b.querySelector('.handle');
 const set=()=>{a.style.clipPath=`inset(0 0 0 ${r.value}%)`;h.style.left=r.value+'%'};
 r.addEventListener('input',set);set();
});

// Contact form (front-end only: connect to Formspree or similar, see README)
const form=document.getElementById('quote');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();
 document.getElementById('ok').style.display='block';
 form.reset();
})}
