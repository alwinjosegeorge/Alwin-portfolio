// small DOM helpers
const $ = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

// set year
$('#year').textContent = new Date().getFullYear();

// mobile menu (simple)
const menuBtn = $('#menuBtn');
menuBtn && menuBtn.addEventListener('click', ()=>{
  const nav = document.querySelector('.main-nav');
  if(nav.style.display === 'flex') { nav.style.display='none'; menuBtn.textContent='☰'; }
  else { nav.style.display='flex'; menuBtn.textContent='✕'; nav.style.flexDirection='column'; nav.style.gap='12px'; nav.style.position='absolute'; nav.style.right='28px'; nav.style.top='70px'; nav.style.background='white'; nav.style.padding='12px'; nav.style.borderRadius='8px'; }
});

// gallery modal
const modal = $('#imgModal');
const modalImg = $('#modalImg');
const modalClose = $('#modalClose');

$$('.masonry-item img').forEach(img=>{
  img.addEventListener('click', (e)=>{
    const src = e.target.src;
    modalImg.src = src;
    modal.classList.add('show');
    document.body.style.overflow='hidden';
  });
});

modalClose && modalClose.addEventListener('click', ()=>{
  modal.classList.remove('show');
  modalImg.src = '';
  document.body.style.overflow='';
});
modal && modal.addEventListener('click', (e)=>{
  if(e.target === modal){ modal.classList.remove('show'); modalImg.src=''; document.body.style.overflow=''; }
});

// contact form (demo)
const form = $('#contactForm');
const formResult = $('#formResult');
form && form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if(!name || !email){ formResult.textContent = 'Please enter name and email.'; return; }
  formResult.textContent = 'Sending…';
  setTimeout(()=>{ formResult.style.color = 'green'; formResult.textContent = 'Message sent! I will reply soon.'; form.reset(); }, 900);
});
