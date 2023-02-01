let menuVisible = false;
//función que oculta omuestra el menú
function mostrarOcultarMenu(){
	if (menuVisible) {
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}

function seleccionar(){
	//ocultar el menu una vez que selecciono una opcion
	document.getElementById("nav").classList ="";
	menuVisible = false;
}
// funciones que aplica las animaciones de las habilidades
function efectoHabilidades(){
	var skills = document.getElementById("skills");
	var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if(distancia_skills >=300){
		let habilidades = document.getElementsByClassName("progreso");
		habilidades[0].classList.add("htmlcss");
		habilidades[1].classList.add("photoshop");
		habilidades[2].classList.add("java");
		habilidades[3].classList.add("illustrator");
		habilidades[4].classList.add("javascript");
		habilidades[5].classList.add("aftereffects");
		habilidades[6].classList.add("comunicacion");
		habilidades[7].classList.add("trabajo");
		habilidades[8].classList.add("creatividad");
		habilidades[9].classList.add("dedicacion");
		habilidades[10].classList.add("proyect");
		habilidades[11].classList.add("proactivo");
	}
}

window.onscroll = function(){
	efectoHabilidades();
}