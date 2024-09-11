var preguntas = [
    "¿te gusta leer?",
    "¿sueles tomar apuntes?",
    "¿te gusta el listening de ingles?",
    "¿para leer un libro necesita obligatoriamente ener imagenes imagenes?",
    "¿te gusta hacer trabajos grupales?",
    "¿se te da bien hacer los mapas conceptuales?",
    "¿sueles participar mucho en las clases?",
    "¿te gusta las practicas en el laboratorio?",
    "¿sueles acordarte de algo que te dijeron de hace tiempo?",
    "¿sueles recordar las clases con alguna experierncia que te paso en esa clase?",
    "¿para aprenderte una exposicion sueles hablarlo o contarle a alguien lo que entendiste?",
    "¿para tomar apuntes sueles hacer resumenes?",
    "¿cuando vas a tener algun examen sueles repasar tus apuntes?"
];

var opciones = [
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"], 
    ["si","no"],
    ["si","no"],
    ["si","no"],
    ["si","no"], 
    ["si","no"],
    ["si","no"],
    ["si","no"]
];  

var puntajePorOpcion = [
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0]
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
            localStorage.setItem("puntaje_apr", puntaje);
            window.location.href = 'result_aprende.html';
        }
    }
    
    function siguientePregunta() {
        document.getElementById("pregunta").innerHTML = preguntas[i];
        document.getElementById("op1").innerHTML = opciones[i][0];
        document.getElementById("op2").innerHTML = opciones[i][1];
    }
    
    siguientePregunta();
    document.getElementById("op1").addEventListener("click", function() {
        actualizarPuntaje(1);
    })
    document.getElementById("op2").addEventListener("click", function() {
        actualizarPuntaje(2);
    })

