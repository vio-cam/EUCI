var preguntas = [
    "¿Cuál de las siguientes características es común en todos los animales?",
    "¿Qué parte del cuerpo de un insecto está encargada de la locomoción?",
    "¿Cuál es la función principal del sistema digestivo en los animales?",
    "¿Qué tipo de simetría tienen los animales como el pez y el delfín?",
    "¿Qué estructura de los hongos es responsable de la absorción de nutrientes?",
    "¿Cuál es una de las principales funciones de los hongos en el ecosistema?",
    "¿Qué tipo de reproducción utilizan muchos hongos para proliferar rápidamente?",
    "¿Cómo se llaman las estructuras que producen esporas en los hongos?",
    "¿Cuál es la función principal de los cloroplastos en las células vegetales?",
    "¿Qué estructura en las plantas ayuda a la reproducción y protección de las semillas?",
    "¿Cuál de las siguientes es una característica de las plantas angiospermas?",
    "¿Qué función cumple la raíz en las plantas?"
];

var opciones = [
    ["Realizan fotosíntesis","Tienen células eucarióticas","Son autótrofos"],
    ["Antenas","Alas","Ojos"],
    ["Producir hormonas","Absorber nutrientes y descomponer alimentos","Regular la temperatura corporal"],
    ["Radial","Bilateral","Asimétrica"],
    ["Hifa","Espora","Conidio"],
    ["Producción de oxígeno","Descomposición de materia orgánica","Regulación de la temperatura"],
    ["Reproducción sexual","Reproducción asexual","Reproducción vegetativa"],
    ["Basidios","Frutos","Cápsulas"],
    ["Producir energía","Realizar fotosíntesis","Almacenar agua"],
    ["Tallo","Flor","Raíz"],
    ["No tienen flores","Tienen semillas desnudas","Tienen flores y frutos"],
    ["Captar luz solar","Absorber agua y nutrientes del suelo","Realizar la fotosíntesis"]
];  

var puntajePorOpcion = [
    [0,2,0], // Tienen células eucarióticas
    [0,2,0], // Alas
    [0,2,0], // Absorber nutrientes y descomponer alimentos
    [0,2,0], // Bilateral
    [2,0,0], // Hifa
    [0,2,0], // Descomposición de materia orgánica
    [0,2,0], // Reproducción asexual
    [2,0,0], // Basidios
    [0,2,0], // Realizar fotosíntesis
    [0,2,0], // Flor
    [0,0,2], // Tienen flores y frutos
    [0,2,0]  // Absorber agua y nutrientes del suelo
];

var imagenes = [
    "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
    "https://www.asturnatura.com/Imagenes/articulos/insectos/morfologia-externa-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX11Zmchp0gqpKiMMpn1C3yOicLkAoLrwYzg&s",
    "https://t1.ea.ltmcdn.com/es/posts/8/1/5/caracteristicas_de_los_delfines_24518_3_600.jpg",
    "https://dr282zn36sxxg.cloudfront.net/datastreams/f…92ceac9c1562058f43bf1%2BIMAGE_TINY%2BIMAGE_TINY.1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA46Ore_kUqa0BrfS6OK6tvnr3NqOrPp1oA&s",
    "https://dr282zn36sxxg.cloudfront.net/datastreams/f…77580f87affd38f54dc24%2BIMAGE_TINY%2BIMAGE_TINY.1",
    "https://images.theconversation.com/files/460969/or…C794%2C395&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://s1.significados.com/foto/celula-vegetal-partes-significados.jpg?class=article",
    "https://www.abcfichas.com/wp-content/uploads/2021/05/Estructura-de-las-Plantas.jpg",
    "https://www.educ.ar/repositorio/imagen/ver/28711",
    "https://mmegias.webs.uvigo.es/2-organos-v/imagenes/raices-tipos.png"
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
