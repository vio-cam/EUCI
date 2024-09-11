//funcion ingreso
function ingreso(){
    window.location.href = 'assets/usuario.html';
}

function user(){
    var nombre = document.getElementById("user").value;
    localStorage.setItem("name", nombre);
    window.location.href = 'conoc.html';
}

function agregar_nombre() {
    var anterior = document.getElementById("hola");
    var actual = localStorage.getItem("name");
    var mensaje = '<span>, digame le gustaria poner a prueba sus conocimientos?</span>';
    actual = actual + mensaje; 
    anterior.innerHTML = anterior.innerHTML + actual;
}
agregar_nombre(); 

//cuestionarios direccion
function prueba_cono(){
    window.location.href = 'prueba_cono.html'   
}

function prueba_aprend(){
    window.location.href = 'test_aprende.html'
}

//grados test
function s1(){
    window.location.href = 'sec1/t1.html'
}

function s2(){
    window.location.href = 'sec2/t2.html'
}

function s3(){
    window.location.href = 'sec3/t3.html'
}

function s4(){
    window.location.href = 'sec4/t4.html'
}

function s5(){
    window.location.href = 'sec5/t5.html'
}

