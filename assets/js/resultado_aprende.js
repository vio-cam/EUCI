var puntaje = localStorage.getItem('puntaje_apr');
var est_apren = '';
var noCount = 0; // Contador para la opción "No"
var timer; // Variable para el temporizador
var tiempoRestante = 60; // 1 minuto en segundos

function continuar(url) {
    window.location.href = url;
}

if (puntaje >= 10) {
    est_apren = "Tu aprendizaje es multimodal.";
    continuar('tipos/multimodal.html');
} else if (puntaje >= 8) {
    est_apren = "Tu aprendizaje es auditivo.";
    continuar('tipos/auditivo.html');
} else if (puntaje >= 4) {
    est_apren = "Tu aprendizaje es verbal.";
    continuar('tipos/verbal.html');
} else if (puntaje >= 1) {
    est_apren = "Tu aprendizaje es visual.";
    continuar('tipos/visual.html');
} else {
    est_apren = "Has presionado en reiteradas veces la opción 'No', por favor no se tome esto como un juego, intenta de nuevo después de.";
    iniciarTemporizador();
}

document.getElementById('resultado').innerHTML = est_apren;

// Habilitar el botón para continuar si el usuario no ha presionado "No" excesivamente
if (puntaje >= 1) {
    habilitarBotonContinuar(); // Habilita el botón
}

function habilitarBotonContinuar() {
    document.querySelector('.botonR').innerText = "Continuar"; // Asegúrate de que el texto sea "Continuar"
    document.querySelector('.botonR').disabled = false; // Habilita el botón
}

function iniciarTemporizador() {
    noCount++; // Aumenta el contador cada vez que se llama a esta función

    // Cambia el texto y deshabilita el botón
    document.querySelector('.botonR').innerText = "Espera 1 minuto"; 
    document.querySelector('.botonR').disabled = true;

    // Inicia el temporizador
    timer = setInterval(function() {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            habilitarBotonContinuar(); // Restaura el texto y habilita el botón
            // Redirigir al test
            continuar('test_aprende.html'); // Cambia esto a la ruta de tu test
            tiempoRestante = 60; // Reinicia el temporizador
            noCount = 0; // Reinicia el contador
        }
    }, 1000); // 1 segundo
}

document.getElementById('op2').addEventListener('click', function() {
    noCount++;
    if (noCount > 12) { // Cambia este número si quieres un límite diferente
        iniciarTemporizador();
    }
});
