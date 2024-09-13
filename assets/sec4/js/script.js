var preguntas = [
    "¿Cuál es la unidad básica de la vida en todos los organismos vivos?",
    "¿Qué estructura en la célula contiene el material genético?",
    "¿Qué tipo de célula no tiene núcleo definido?",
    "¿Cuál es la función principal del ADN en los organismos vivos?",
    "¿Qué tipo de reproducción involucra la fusión de gametos masculinos y femeninos?",
    "¿Cuál es la función principal de los ribosomas en una célula?",
    "¿Qué es un gen?",
    "¿Cómo se llama el proceso por el cual las células obtienen energía a partir de glucosa en presencia de oxígeno?",
    "¿Cuál es la función de la clorofila en las plantas?",
    "¿Qué teoría propone que las especies evolucionan a través de la selección natural?"
];

var opciones = [
    ["Órgano","Célula","Tejido"],
    ["Mitocondria","Núcleo","Ribosoma"],
    ["Célula eucariota","Célula procariota","Célula vegetal"],
    ["Proporcionar energía","Transmitir información genética","Regular el pH"],
    ["Reproducción asexual","Reproducción vegetativa","Reproducción sexual"],
    ["Producción de ATP","Síntesis de proteínas","Descomposición de sustancias"],
    ["Una secuencia de aminoácidos","Una secuencia de nucleótidos que codifica una proteína","Un organelo celular"],
    ["Fotosíntesis","Fermentación","Respiración celular"],
    ["Absorber agua del suelo","Captar luz solar para la fotosíntesis","Transportar nutrientes"],
    ["Teoría celular","Teoría del diseño inteligente","Teoría de la evolución de Darwin"]
];

var puntajePorOpcion = [
    [0,2,0], // Unidad básica de la vida
    [0,2,0], // Estructura que contiene el material genético
    [0,2,0], // Tipo de célula sin núcleo definido
    [0,2,0], // Función principal del ADN
    [0,0,2], // Reproducción sexual
    [0,2,0], // Función de los ribosomas
    [0,2,0], // Qué es un gen
    [0,0,2], // Proceso de obtención de energía (Respiración celular)
    [0,2,0], // Función de la clorofila
    [0,0,2]  // Teoría de la evolución de Darwin
];

var imagenes = [
    "https://ode.educacion.es/INTEF/es_2023120912_9225348/vistaPreviaAgrega.png",
    "https://concepto.de/wp-content/uploads/2018/08/nucleo-celular1-e1535469164136.jpg",
    "https://concepto.de/wp-content/uploads/2018/10/celula-procariota-min-e1539192866612.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2QQdQ3NKaZTgX3t9A4MyWuAhKMAsQbR05w&s",
    "https://www.reproduccionasistida.org/wp-content//gametos-ovulos-espermatozoides.png",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mitochondrion_%28borderless_version%29-es.svg",
    "https://www.reproduccionasistida.org/wp-content//gen-glosario.png",
    "https://blog.aegon.es/wp-content/uploads/2022/06/niveles-glucosa-sangre.jpg",
    "https://cdn0.ecologiaverde.com/es/posts/9/7/5/que_es_la_clorofila_y_sus_tipos_2579_orig.jpg",
    "https://raed.academy/wp-content/uploads/2021/03/evolucion-del-Hombre-dstNtc.jpeg"
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
