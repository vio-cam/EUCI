var preguntas = [
    "¿Cuál de los siguientes animales es un mamífero?",
    "¿Cómo se llama el proceso por el cual las mariposas pasan de la oruga a su forma adulta?",
    "¿Qué tipo de simetría tiene el cuerpo de una estrella de mar?",
    "¿Cuál de los siguientes animales es conocido por su capacidad de camuflaje?",
    "¿Qué parte de la planta es responsable de la fotosíntesis?",
    "¿Cuál de los siguientes es un ejemplo de planta con flores?",
    "¿Qué tipo de planta no tiene flores ni semillas?",
    "¿Qué estructura en la planta ayuda a la absorción de agua del suelo?",
    "¿Cuál es la función principal del núcleo en una célula?",
    "¿Qué orgánulo celular está involucrado en la producción de proteínas?"
];

var opciones = [
    ["Tiburón","Delfín", "Medusa"],
    ["Germinación","Metamorfosis","Fotosíntesis"],
    ["Bilateral","Radial","Asimétrica"],
    ["Elefante","Camaleón","Pingüino"],
    ["Raíz","Tallo","Hoja"],
    ["Musgo","Helecho","Rosa"],
    ["Conífera","Helecho","Orquídea"],
    ["Hojas","Flores","Raíces"],
    ["Producir energía","Controlar las actividades celulares y contener el ADN","Transportar nutrientes"],
    ["Mitocondria","Ribosoma","Lisosoma"]
];  

var puntajePorOpcion = [
    [0,2,0], // Mamífero (Delfín)
    [0,2,0], // Metamorfosis
    [0,2,0], // Radial
    [0,2,0], // Camaleón
    [0,0,2], // Hoja
    [0,0,2], // Rosa
    [0,2,0], // Helecho
    [0,0,2], // Raíces
    [0,2,0], // Núcleo
    [0,2,0]  // Ribosoma
];

var imagenes = [
    "https://www2.culturarecreacionydeporte.gov.co/sites/default/files/los-perros.jpg",
    "https://www.worldanimalprotection.cr/cdn-cgi/image…280/siteassets/article/gettyimages-1031613028.jpg",
    "https://www.ngenespanol.com/wp-content/uploads/2023/11/que-son-las-estrellas-de-mar-como-770x431.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPsGjYmEFrzRHYSkyWCkwPNaku0ClIEufAA&s",
    "https://cdn0.ecologiaverde.com/es/posts/8/4/9/fotosintesis_que_es_fases_e_importancia_2948_600.jpg",
    "https://e.rpp-noticias.io/xlarge/2023/01/06/251625_1371339.jpg",
    "https://i.blogs.es/13d967/1366_20001/1366_2000.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OCjNdCXVncCvTzmNXFByDeuKdLlnEamiXA&s",
    "https://www.genome.gov/sites/default/files/media/images/2022-12/ce_lula.jpeg",
    "https://concepto.de/wp-content/uploads/2015/03/estructura-de-las-proteinas-e1601929385804.png"
];

var puntaje = 0;
var i = 0;

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    puntaje = puntaje + puntajePorOpcion[i][indice];
    i = i + 1;
    if (i < preguntas.length) {
        siguientePregunta();
    } else {
        //mostrarResultado();
        localStorage.setItem("puntaje", puntaje);
        window.location.href = '../resultado.html';
    }
}

function siguientePregunta() {
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
}

siguientePregunta();
document.getElementById("op1").addEventListener("click", function() {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function() {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function() {
    actualizarPuntaje(3);
});