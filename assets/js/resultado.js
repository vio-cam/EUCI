// Obtén el puntaje del almacenamiento local
var puntaje = localStorage.getItem('puntaje');
var resultadoText = '';
var maxPuntaje = 20; // Puntaje máximo posible
var porcentaje = ((puntaje / maxPuntaje) * 100).toFixed(0); // Calcula el porcentaje

// Define el texto del resultado basado en el puntaje
if (puntaje >= 20) {
  resultadoText = "¡Wow! Lo hiciste excelente, seguro repasas a menudo";
} else if (puntaje > 15) {
  resultadoText = "¡Estás por buen camino! Muy bien :D";
} else if (puntaje > 11) {
  resultadoText = "Puedes mejorar, ¡Tú puedes!";
} else {
  resultadoText = "Oh bueno... aquí te podemos ayudar a superarte, no te rindas";
}

// Muestra el porcentaje en el círculo
var resultadoElement = document.getElementById('resultado');
resultadoElement.innerHTML = `${porcentaje}%`;

// Actualiza el fondo del círculo según el porcentaje
document.querySelector('.resultado').style.backgroundImage = `conic-gradient(#00ff00 ${porcentaje}%, transparent ${porcentaje}% 100%)`;

// Muestra el puntaje y el mensaje en la burbuja de diálogo de Robotín
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
