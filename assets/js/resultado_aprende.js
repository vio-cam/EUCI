var puntaje = localStorage.getItem('puntaje_apr');
var est_apren = '';

if (puntaje >= 19) {
    est_apren = "tu aprendizaje es multimodal";
    function continuar(){
        window.location.href = '/tipos de aprendizaje/multimodal.html';
    }
} else if (puntaje >= 8) {
  est_apren = "tu aprendizaje es auditivo";
      function continuar(){
        window.location.href = 'tipos de aprendizaje/auditivo.html';
    }
} else if (puntaje >= 6) {
  est_apren = "tu aprendizaje es verbal";
      function continuar(){
        window.location.href = 'tipos de aprendizaje/verbal.html';
    }
} else if (puntaje >=3){
    est_apren = "tu aprendizaje es visual";
    function continuar(){
      window.location.href = 'tipos de aprendizaje/visual.html';
  }

} else {
  est_apren = "a presionado en reiteradas veces la opcion 'no', por favor no se tome esto como un juego, e intenelo de nuevo despues de ";
  function continuar(){
    window.location.href = 'tipos de aprendizaje/kinestico.html';
}
}
document.getElementById('resultado').innerHTML = `${est_apren}`;