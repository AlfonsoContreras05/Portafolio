const nav=document.getElementById('nav');
const menuButton=document.getElementById('icono-nav');
const navLinks=document.querySelectorAll('#link a');
const filterButtons=document.querySelectorAll('.filtro');
const projectCards=document.querySelectorAll('.proyecto-card');

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

document.querySelectorAll('.seccion-observable').forEach(section=>section.classList.add('visible'));
