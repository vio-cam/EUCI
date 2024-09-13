var preguntas = [
    "¿Cuál es la unidad de medida de la concentración de contaminantes en el aire en el Sistema Internacional de Unidades (SI)?",
    "¿Qué tipo de movimiento describe un objeto que se mueve a velocidad constante en línea recta?",
    "¿Qué fórmula se utiliza para calcular la velocidad final de un objeto en un Movimiento Rectilíneo Uniformemente Acelerado (MRUV) cuando parte desde el reposo?",
    "¿Cómo se determina la aceleración en un MRUV si se conoce la velocidad inicial, la velocidad final y el tiempo transcurrido?",
    "¿Qué componente de un vector se calcula utilizando el coseno del ángulo que forma con el eje x?",
    "En el contexto del MRUV, ¿cómo se define el tiempo de vuelo de un objeto lanzado verticalmente hacia arriba hasta alcanzar su altura máxima?",
    "¿Cómo se calcula la suma de dos vectores en un plano cartesiano?",
    "En un MRUV, si se conoce la distancia recorrida y el tiempo, ¿cómo se puede calcular la aceleración si el objeto partió desde el reposo?",
    "Si un objeto está frenando con una aceleración constante, ¿cómo se puede calcular el tiempo necesario para que el objeto se detenga si se conoce su velocidad inicial y la aceleración?",
    "¿Cómo se determina la componente x de un vector dado su módulo y el ángulo con el eje x en un plano cartesiano?"
];

var opciones = [
    ["Partículas por millón (ppm)","Microgramos por metro cúbico (µg/m³)","Gramos por litro (g/L)"],
    ["Movimiento Rectilíneo Uniforme (MRU)","Movimiento Rectilíneo Uniformemente Acelerado (MRUV)","Movimiento Circular Uniforme"],
    ["v = u + a . t","v = u + g . t","v = √(2.a.d)"],
    ["a = (v - u) / t","a = (v * t) / u","a = (d / t²)"],
    ["Componente x","Componente y","Magnitud total"],
    ["El tiempo es igual a la velocidad inicial dividida por la gravedad","El tiempo es igual a la velocidad inicial multiplicada por la gravedad","El tiempo es igual a la velocidad inicial dividida por la aceleración"],
    ["Suma de las magnitudes","Suma componente a componente","Multiplicación de las magnitudes"],
    ["a = 2 * d / t²","a = d / (2 * t)","a = v / t"],
    ["t = v / a","t = a / v","t = v² / (2 * a)"],
    ["Componente x = módulo * cos(ángulo)","Componente x = módulo * sin(ángulo)","Componente x = módulo * tan(ángulo)"]
];

var puntajePorOpcion = [
    [0,2,0], // Unidad de medida de la concentración
    [2,0,0], // Tipo de movimiento del automóvil
    [0,2,0], // Fórmula para calcular la velocidad final en MRUV
    [2,0,0], // Determinación de la aceleración en MRUV
    [2,0,0], // Componente x del vector
    [2,0,0], // Tiempo de vuelo en MRUV
    [2,0,0], // Cálculo de la suma de vectores
    [2,0,0], // Cálculo de la aceleración en MRUV
    [2,0,0], // Cálculo del tiempo para detenerse
    [2,0,0]  // Determinación de la componente x del vector
];


var puntaje = 0;
var i = 0;

var robotEnojo = document.createElement('img');
robotEnojo.src = '../recursos/robotin_enojo.png';
robotEnojo.alt = 'Robot enojado';
robotEnojo.className = 'robot-enojo';
document.body.appendChild(robotEnojo);

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    var botones = document.getElementsByClassName('quiz-option');

    if (puntajePorOpcion[i][indice] === 0) {
        // Mostrar feedback de respuesta incorrecta
        botones[indice].classList.add('opcion-incorrecta');
        mostrarRobotEnojado();

        // Mostrar la opción correcta
        setTimeout(function() {
            for (var j = 0; j < botones.length; j++) {
                if (puntajePorOpcion[i][j] === 2) {
                    botones[j].classList.add('opcion-correcta');
                }
                botones[j].disabled = true;
            }

            // Esperar antes de pasar a la siguiente pregunta
            setTimeout(function() {
                ocultarRobotEnojado();
                i = i + 1; // Avanzar a la siguiente pregunta
                siguientePregunta();
            }, 2000); // Espera antes de avanzar, puedes ajustar este tiempo
        }, 1000); // Espera para mostrar la respuesta correcta
    } else {
        puntaje += puntajePorOpcion[i][indice];
        i = i + 1;
        siguientePregunta();
    }
}

function mostrarRobotEnojado() {
    robotEnojo.classList.add('mostrar-enojo');
    setTimeout(function() {
        robotEnojo.classList.remove('mostrar-enojo');
    }, 1500); // El robot permanece visible durante 1.5 segundos antes de regresar
}

function ocultarRobotEnojado() {
    setTimeout(function() {
        robotEnojo.classList.remove('mostrar-enojo');
    }, 2000); // El robot permanece oculto después de que se muestra la respuesta correcta
}

function siguientePregunta() {
    var botones = document.getElementsByClassName('quiz-option');

    // Resetear los estilos de los botones
    for (var j = 0; j < botones.length; j++) {
        botones[j].classList.remove('opcion-incorrecta', 'opcion-correcta');
        botones[j].disabled = false;
    }

    // Actualizar pregunta y opciones
    if (i < preguntas.length) {
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
        document.getElementById("op3").innerHTML = opciones[i][2];

        // Actualizar la imagen
        var imagenElement = document.getElementById("imagenPregunta");
        if (imagenes[i]) {
            imagenElement.src = imagenes[i];
            imagenElement.style.display = "block";
        } else {
            imagenElement.style.display = "none";
        }
    } else {
        localStorage.setItem("puntaje", puntaje);
        window.location.href = '../resultado.html';
    }
}

// Asignar eventos a los botones
document.getElementById("op1").addEventListener("click", function() {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function() {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function() {
    actualizarPuntaje(3);
});

siguientePregunta();
