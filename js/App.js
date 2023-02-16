//variables de entorno




//declarativas





//funciones
//funcion que aplica estilos a la seleccion 
function seleccionar(link){
    let opciones = document.querySelectorAll('#link a');
    opciones[0].className = '';
    opciones[1].className = '';
    opciones[2].className = '';
    opciones[3].className = '';
    opciones[4].className = '';
    link.className = 'seleccionado';
    //hacemos desaparecer el menu una vez que se a seleccionado
    let x = document.getElementById('nav');
    x.className = '';
}


//funcion que muestra el menu responsivo
function responsiveMenu(){
    let x = document.getElementById('nav');
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = ""
    }
}





//funcion que aplica la animacion 
function efectoHabilidades(){
    let skills = document.getElementById('skills');
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        document.getElementById('html').classList.add('barra-progreso1');
        document.getElementById('js').classList.add('barra-progreso2');
        document.getElementById('bd').classList.add('barra-progreso3');
        document.getElementById('py').classList.add('barra-progreso4');
        document.getElementById('Mongo').classList.add('barra-progreso5');
        document.getElementById('php').classList.add('barra-progreso6');
        document.getElementById('dj').classList.add('barra-progreso7');
        document.getElementById('gt').classList.add('barra-progreso8');
        document.getElementById('node').classList.add('barra-progreso9');
        document.getElementById('react').classList.add('barra-progreso10');
    }
}

//detectar scrolling para aplicar animacion
window.onscroll = function (){
    efectoHabilidades()
}