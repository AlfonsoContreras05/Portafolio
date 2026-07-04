const nav=document.getElementById('nav');
const menuButton=document.getElementById('icono-nav');
const navLinks=document.querySelectorAll('#link a');
const filterButtons=document.querySelectorAll('.filtro');
const projectCards=document.querySelectorAll('.proyecto-card');
const contactForm=document.getElementById('formulario-contacto');

function closeMenu(){
  nav.classList.remove('responsive');
  menuButton.setAttribute('aria-expanded','false');
}

menuButton.addEventListener('click',()=>{
  nav.classList.toggle('responsive');
  menuButton.setAttribute('aria-expanded',nav.classList.contains('responsive'));
});

navLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    navLinks.forEach(item=>item.classList.remove('seleccionado'));
    link.classList.add('seleccionado');
    closeMenu();
  });
});

filterButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    filterButtons.forEach(item=>item.classList.remove('activo'));
    button.classList.add('activo');
    const category=button.dataset.filter;
    projectCards.forEach(card=>{
      card.classList.toggle('oculto',category!=='todos'&&card.dataset.category!==category);
    });
  });
});

if(contactForm){
  contactForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const nombre=document.getElementById('nombre').value.trim();
    const email=document.getElementById('email').value.trim();
    const tema=document.getElementById('tema').value.trim();
    const mensaje=document.getElementById('mensaje').value.trim();
    const destino=['alfonso.contreras.a3','gmail.com'].join('@');
    const asunto=encodeURIComponent(`Contacto portafolio: ${tema}`);
    const cuerpo=encodeURIComponent(`Hola Alfonso,\n\n${mensaje}\n\nNombre: ${nombre}\nCorreo: ${email}`);
    window.location.href=`mailto:${destino}?subject=${asunto}&body=${cuerpo}`;
  });
}

document.querySelectorAll('.seccion-observable').forEach(section=>section.classList.add('visible'));
