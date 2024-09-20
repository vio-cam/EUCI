var puntaje = localStorage.getItem('puntaje_apr');
var est_apren = '';
var noCount = 0; // Contador para la opción "No"
var timer; // Variable para el temporizador
var tiempoRestante = 120; // 2 minutos en segundos

function continuar(url) {
    if (tiempoRestante <= 0) {
        window.location.href = url;
    }
}

if (puntaje >= 10) {
    est_apren = "Tu aprendizaje es multimodal.";
    function continuar(){
      window.location.href = '/assets/tipos de aprendizaje/multimodal.html'
    };
} else if (puntaje >= 8) {
    est_apren = "Tu aprendizaje es auditivo.";
    function continuar(){
      window.location.href = '/assets/tipos de aprendizaje/auditivo.html'
    };
} else if (puntaje >= 4) {
    est_apren = "Tu aprendizaje es verbal.";
    function continuar(){
      window.location.href = '/assets/tipos/verbal.html'
    };
} else if (puntaje >= 1) {
    est_apren = "Tu aprendizaje es visual.";
    function continuar(){
      window.location.href = '/assets/tipos/visual.html'
    };
} else {
    est_apren = "Has presionado en reiteradas veces la opción 'No', por favor no se tome esto como un juego, intente de nuevo después de.";
    iniciarTemporizador();
}

document.getElementById('resultado').innerHTML = est_apren;

// Habilitar el botón para continuar si el usuario no ha presionado "No" excesivamente
if (puntaje >= 1) {
    document.querySelector('.botonR').innerText = "Continuar"; // Asegúrate de que el texto sea "Continuar"
    document.querySelector('.botonR').disabled = false; // Habilita el botón
}

function iniciarTemporizador() {
    noCount++; // Aumenta el contador cada vez que se llama a esta función

    // Cambia el texto y deshabilita el botón
    document.querySelector('.botonR').innerText = "Espera 2 minutos"; 
    document.querySelector('.botonR').disabled = true;

    // Inicia el temporizador
    timer = setInterval(function() {
        tiempoRestante--;
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            document.querySelector('.botonR').innerText = "Continuar"; // Restaura el texto
            document.querySelector('.botonR').disabled = false; // Habilita el botón
            tiempoRestante = 120; // Reinicia el temporizador
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
