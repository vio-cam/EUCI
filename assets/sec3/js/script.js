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
    "https://media.istockphoto.com/id/1392548173/es/vec…20&c=i0ecdzZzFEjfjlG6n5J2or1gYFZhZPxLn6Grp9zlVKM=",
    "https://lh6.googleusercontent.com/proxy/JV2YFA7mih…jkzvBq-JzCuMXaYXZwRqllmH4Wt3eIwicgBThHZdDEHlZJe2Q",
    "https://liceoagb.es/fisquim/imagenes/teoatom36.jpg",
    "https://believe.earth/wp-content/uploads/2018/10/economia-agua-pixabay-believe-earth-1024x683.jpg",
    "https://beta-static.fishersci.com/content/dam/fishersci/en_US/images/periodic-table/mobile-table.png",
    "https://www.shutterstock.com/image-vector/neutrali…acid-base-reaction-chemistry-260nw-2070193400.jpg",
    "https://esc16de1posse.wordpress.com/wp-content/upl…diferencias-entre-disolucion-y-desintegracion.jpg",
    "https://mediateca.educa.madrid.org/imagen.php?id=veshvog6wmx6ea42&m=0&ext=.jpg",
    "ttps://cdn-icons-png.flaticon.com/512/2286/2286119.png",
    "https://energyeducation.ca/wiki2develop/images/3/35/CARBON_es.png"
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
