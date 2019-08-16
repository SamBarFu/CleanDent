var suma = 0;

function formulario() {
    suma++;
    if (suma % 2 == 0) {
        document.getElementById("esconder").style.visibility = "hidden";
    } else {
        document.getElementById("esconder").style.visibility = "visible";
    }
}

var redireccionar = () => {
    window.location.href = "file:///home/ravehunter05/Documents/AplicacionesGraficas/Citas.html";
}