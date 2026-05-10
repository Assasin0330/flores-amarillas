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

const modal = document.getElementById("modal");
const cartaImg = document.getElementById("cartaImg");

let contraseñaCorrecta = "1234";

/* abrir */
function abrirCarta(nombre){

    modal.style.display = "flex";

    cartaImg.src = nombre + ".jpg";

}

/* cerrar */
function cerrarCarta(){

    modal.style.display = "none";

    cartaImg.classList.add("blur");

    document.querySelector(".candado").style.display = "block";

}

/* desbloquear */
function desbloquear(){

    let pass = document.getElementById("password").value;

    if(pass === contraseñaCorrecta){

        cartaImg.classList.remove("blur");

        document.querySelector(".candado").style.display = "none";

    }else{

        alert("Contraseña incorrecta");

    }

}
