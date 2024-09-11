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
    "https://cdn.goconqr.com/uploads/media/image/326088…/desktop_eeff0b3c-d59c-42a9-a186-269865428ba1.jpg",
    "https://cdn.goconqr.com/uploads/node/image/1076183…desktop_f3bbafcf-c787-4dd5-928f-63932d0c4c38.jpeg",
    "https://concepto.de/wp-content/uploads/2018/10/celula-procariota-min-e1539192866612.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBk6Jpg8CZdtwigwcwBFiZyoNW2XpZiEY5w&s",
    "https://www.reproduccionasistida.org/wp-content//gametos-ovulos-espermatozoides.png",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mitochondrion_%28borderless_version%29-es.svg",
    "https://healthincode.com/wp-content/uploads/2023/01/son-genes.jpg",
    "https://blog.aegon.es/wp-content/uploads/2022/06/niveles-glucosa-sangre.jpg",
    "https://cdn0.ecologiaverde.com/es/posts/9/7/5/que_es_la_clorofila_y_sus_tipos_2579_orig.jpg",
    "https://raed.academy/wp-content/uploads/2021/03/evolucion-del-Hombre-dstNtc.jpeg"
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
