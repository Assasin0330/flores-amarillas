// Espera a que cargue la página
document.addEventListener("DOMContentLoaded", () => {

    const mensaje = document.querySelector(".mensaje");

    // Aparece el mensaje después de 1 segundo
    setTimeout(() => {
        mensaje.style.animation = "aparecer 2s ease forwards";
    }, 1000);


    // Efecto cuando haces click en el ramo
    const ramo = document.querySelector(".ramo");

    ramo.addEventListener("click", () => {
        mensaje.textContent = "Las amo mucho💛🌼";
        mensaje.style.animation = "aparecer 1s ease forwards";
    });

});

// Generar flores de fondo
const fondo = document.querySelector(".fondo");

for(let i = 0; i < 30; i++){
    let flor = document.createElement("div");
    flor.classList.add("flor-fondo");

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.animationDuration = (3 + Math.random() * 5) + "s";
    flor.style.opacity = Math.random();

    fondo.appendChild(flor);
}

const btn = document.getElementById("btnMusica");
const musica = document.getElementById("musica");

let reproduciendo = false;

btn.addEventListener("click", () => {
    if(!reproduciendo){
        musica.play();
        btn.textContent = "⏸️ Pausar música";
    } else {
        musica.pause();
        btn.textContent = "🎵 Reproducir música";
    }
    reproduciendo = !reproduciendo;
});

let contraseñaCorrecta = "";

const abrirMenu = document.getElementById("abrirMenu");
const menu = document.querySelector(".menu-cartas");
const carta = document.getElementById("carta");

const imagen = document.getElementById("imagenCarta");
const textoCarta = document.getElementById("textoCarta");

const contenido = document.querySelector(".contenido");
const candado = document.querySelector(".candado");

let contraseñaCorrecta = "1234";

/* abrir interfaz */
abrirMenu.addEventListener("click", () => {

    menu.classList.remove("oculto");
    abrirMenu.style.display = "none";

});


function mostrarCarta(nombre){

    menu.classList.add("oculto");
    carta.classList.remove("oculto");

    /* reiniciar carta */
    document.getElementById("imgCarta")
    .classList.remove("abierta");

    document.querySelector(".candado")
    .classList.remove("oculto");

    document.querySelector(".mensajeOculto")
    .classList.remove("visible");

    document.getElementById("password").value = "";

    /* CAMBIAR CONTRASEÑA */

    if(nombre === "mama"){

        contraseñaCorrecta = "mama";
        textoCarta.textContent =
        "Gracias mamá por todo tu amor 💛";

    }

    if(nombre === "tia"){

        contraseñaCorrecta = "tia";
        textoCarta.textContent =
        "Gracias tía por siempre apoyarme 🌼";

    }

    if(nombre === "lorena"){

        contraseñaCorrecta = "lorena";
        textoCarta.textContent =
        "Ama Lorena, eres muy especial 💕";

    }

    if(nombre === "carmen"){

        contraseñaCorrecta = "carmen";
        textoCarta.textContent =
        "Mami Carmen, gracias por cuidarme 💛";

    }

    if(nombre === "pita"){

        contraseñaCorrecta = "pita";
        textoCarta.textContent =
        "Pita, eres increíble 🌸";

    }

}

/* desbloquear */
function desbloquear(){

    const pass = document.getElementById("password").value;

    if(pass === contraseñaCorrecta){

    
document.getElementById("imgCarta")
.classList.add("abierta");

document.querySelector(".candado")
.classList.add("oculto");

document.querySelector(".mensajeOculto")
.classList.add("visible");
    }else{

        alert("❌ Contraseña incorrecta");

    }

}

/* regresar */
function volverMenu(){

    carta.classList.add("oculto");
    menu.classList.remove("oculto");

}
