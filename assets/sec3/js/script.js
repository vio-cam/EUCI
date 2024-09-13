var preguntas = [
    "¿Cuál es el número atómico del oxígeno?",
    "¿Qué tipo de enlace se forma cuando dos átomos comparten electrones?",
    "¿Cómo se llama el proceso químico en el que una sustancia se descompone en dos o más sustancias más simples?",
    "¿Cuál es la fórmula química del agua?",
    "¿Qué grupo de la tabla periódica contiene los elementos conocidos como gases nobles?",
    "¿Qué es una reacción de neutralización?",
    "¿Qué propiedad describe la capacidad de un líquido para disolver otras sustancias?",
    "¿Cuál es la carga de un ion de sodio (Na) cuando pierde un electrón?",
    "¿Qué es una sustancia que aumenta la velocidad de una reacción química sin ser consumida en el proceso?",
    "¿Cuál es la masa atómica aproximada del carbono?"
];

var opciones = [
    ["8","16","6"],
    ["Enlace iónico","Enlace covalente","Enlace metálico"],
    ["Síntesis","Descomposición","Sustitución"],
    ["H2O","CO2","NaCl"],
    ["Grupo 1","Grupo 7","Grupo 18"],
    ["Una reacción entre un ácido y una base para formar una sal y agua","Una reacción que produce gas","Una reacción en la que se forma un precipitado"],
    ["Punto de ebullición","Solubilidad","Densidad"],
    ["-1","+1","0"],
    ["Reactivo","Catalizador","Inhibidor"],
    ["12","16","14"]
];

var puntajePorOpcion = [
    [2,0,0], // Número atómico del oxígeno
    [0,2,0], // Enlace covalente
    [0,2,0], // Descomposición
    [2,0,0], // Fórmula del agua
    [0,0,2], // Gases nobles
    [2,0,0], // Reacción de neutralización
    [0,2,0], // Solubilidad
    [0,2,0], // Carga de ion de sodio
    [0,2,0], // Catalizador
    [2,0,0]  // Masa atómica del carbono
];

var imagenes = [
    "https://www.dciencia.es/wp-content/uploads/ox%C3%ADgeno.jpg",
    "https://cursoparalaunam.com/wp-content/uploads/2022/03/enlace-covalente-doble.jpg",
    "https://liceoagb.es/fisquim/imagenes/teoatom36.jpg",
    "https://believe.earth/wp-content/uploads/2018/10/economia-agua-pixabay-believe-earth-1024x683.jpg",
    "https://beta-static.fishersci.com/content/dam/fishersci/en_US/images/periodic-table/mobile-table.png",
    "https://www.shutterstock.com/image-vector/neutrali…acid-base-reaction-chemistry-260nw-2070193400.jpg",
    "https://www.shutterstock.com/image-vector/schemati…ity-chemistry-solute-solvent-260nw-2142221075.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvLeSfk-STKYjlhCNT5Rm0sigIHDcDmfxdg&s",
    "https://delfincar.com/wp-content/uploads/2024/05/catalizador.jpg",
    "https://clickmica.fundaciondescubre.es/files/2016/12/coal-471903_1280-e1481916942271-768x514.jpg"
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
