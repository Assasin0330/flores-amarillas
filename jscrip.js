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


/* secciones */
const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");
const cartaSection =
document.getElementById("cartaSection");

/* carta */
const imgCarta =
document.getElementById("imgCarta");

const candado =
document.getElementById("candado");

const mensajeCarta =
document.getElementById("mensajeCarta");

const tituloCarta =
document.getElementById("tituloCarta");

/* contraseña */
let contraseñaCorrecta = "";

/* abrir menú */
function abrirMenu(){

    inicio.classList.add("oculto");
    menu.classList.remove("oculto");

}

/* volver inicio */
function volverInicio(){

    menu.classList.add("oculto");
    cartaSection.classList.add("oculto");

    inicio.classList.remove("oculto");

}

/* volver menú */
function volverMenu(){

    cartaSection.classList.add("oculto");
    menu.classList.remove("oculto");

}

/* abrir carta */
function abrirCarta(nombre){

    menu.classList.add("oculto");
    cartaSection.classList.remove("oculto");

    /* reiniciar */
    imgCarta.classList.remove("abierta");

    candado.classList.remove("oculto");

    mensajeCarta.classList.remove("visible");

    document.getElementById("password").value = "";

    /* datos */

    if(nombre === "mama"){

        tituloCarta.textContent =
        "💌 Carta para Mamá";

        mensajeCarta.textContent =
        "Gracias mamá por todo tu amor 💛";

        contraseñaCorrecta = "mama";
    }

    if(nombre === "tia"){

        tituloCarta.textContent =
        "💌 Carta para Tía";

        mensajeCarta.textContent =
        "Gracias tía por siempre apoyarme 🌼";

        contraseñaCorrecta = "tia";
    }

    if(nombre === "lorena"){

        tituloCarta.textContent =
        "💌 Carta para Ama Lorena";

        mensajeCarta.textContent =
        "Ama Lorena, eres muy especial 💕";

        contraseñaCorrecta = "lorena";
    }

    if(nombre === "carmen"){

        tituloCarta.textContent =
        "💌 Carta para Mami Carmen";

        mensajeCarta.textContent =
        "Mami Carmen, gracias por cuidarme 💛";

        contraseñaCorrecta = "carmen";
    }

    if(nombre === "pita"){

        tituloCarta.textContent =
        "💌 Carta para Pita";

        mensajeCarta.textContent =
        "Pita, eres increíble 🌸";

        contraseñaCorrecta = "pita";
    }

}

/* desbloquear */
function desbloquearCarta(){

    let pass =
    document.getElementById("password")
    .value
    .toLowerCase()
    .trim();

    if(pass === contraseñaCorrecta){

        imgCarta.classList.add("abierta");

        candado.classList.add("oculto");

        mensajeCarta.classList.add("visible");

    }else{

        alert("❌ Contraseña incorrecta");

    }

}
