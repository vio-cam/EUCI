// Calcula el porcentaje basado en el puntaje obtenido y máximo posible
var puntaje = localStorage.getItem('puntaje') || 0;
var maxPuntaje = 20;
var porcentaje = ((puntaje / maxPuntaje) * 100).toFixed(0);

// Actualiza el contenido de la barra circular
var resultadoElement = document.getElementById('resultado');
resultadoElement.innerHTML = `${porcentaje}%`;

// Modifica la barra de progreso circular en función del porcentaje
resultadoElement.style.backgroundImage = `conic-gradient(green ${porcentaje}%, black ${porcentaje}% 100%)`;

// Muestra el mensaje de puntaje en la burbuja de Robotín
var resultadoText = '';
if (puntaje >= 20) {
    resultadoText = "¡Wow! Lo hiciste excelente, seguro repasas a menudo";
} else if (puntaje > 15) {
    resultadoText = "¡Estás por buen camino! Muy bien :D";
} else if (puntaje > 11) {
    resultadoText = "Puedes mejorar, ¡Tú puedes!";
} else {
    resultadoText = "Oh bueno... aquí te podemos ayudar a superarte, no te rindas";
}
document.getElementById('robot-dialog').innerHTML = `Tu puntaje es ${puntaje}. ${resultadoText}`;


function si() {
    window.location.href = 'aprende_s.html';
}

function maso() {
    window.location.href = 'aprende_m.html';
}

function no() {
    window.location.href = 'aprende_n.html';
}
