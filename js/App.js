const nav = document.getElementById('nav');
const menuButton = document.getElementById('icono-nav');
const navLinks = document.querySelectorAll('#link a');
const filterButtons = document.querySelectorAll('.filtro');
const projectCards = document.querySelectorAll('.proyecto-card');
const contactForm = document.getElementById('formulario-contacto');
const observableSections = document.querySelectorAll('.seccion-observable');

function cerrarMenu() {
    nav.classList.remove('responsive');
    menuButton.setAttribute('aria-expanded', 'false');
}

function seleccionarLink(linkSeleccionado) {
    navLinks.forEach((link) => link.classList.remove('seleccionado'));
    linkSeleccionado.classList.add('seleccionado');
}

function responsiveMenu() {
    nav.classList.toggle('responsive');
    const menuAbierto = nav.classList.contains('responsive');
    menuButton.setAttribute('aria-expanded', menuAbierto.toString());
}

function filtrarProyectos(categoria) {
    projectCards.forEach((card) => {
        const perteneceCategoria = card.dataset.category === categoria;
        const mostrarTodos = categoria === 'todos';

        if (mostrarTodos || perteneceCategoria) {
            card.classList.remove('oculto');
        } else {
            card.classList.add('oculto');
        }
    });
}

function manejarFormulario(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const tema = document.getElementById('tema').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const asunto = encodeURIComponent(`Contacto portafolio: ${tema}`);
    const cuerpo = encodeURIComponent(
        `Hola Alfonso,\n\n${mensaje}\n\nNombre: ${nombre}\nCorreo: ${email}`
    );

    window.location.href = `mailto:victordiaz.pc@gmail.com?subject=${asunto}&body=${cuerpo}`;
}

function activarSeccionesVisibles() {
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.16
    });

    observableSections.forEach((section) => observer.observe(section));
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        seleccionarLink(link);
        cerrarMenu();
    });
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('activo'));
        button.classList.add('activo');
        filtrarProyectos(button.dataset.filter);
    });
});

menuButton.addEventListener('click', responsiveMenu);

if (contactForm) {
    contactForm.addEventListener('submit', manejarFormulario);
}

activarSeccionesVisibles();
