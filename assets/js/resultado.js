var puntaje = localStorage.getItem('puntaje');
var resultadoText = '';

if (puntaje >= 20) {
  resultadoText = "Wow! lo hiciste excelente, seguro repasas a menudo";
} else if (puntaje > 15) {
  resultadoText = "Estas por buen camino, !Muy bien :D!";
} else if (puntaje > 11) {
  resultadoText = "Puedes mejorar, !Tu puedes!";
} else {
  resultadoText = "Oh bueno... aqui te podemos ayudar a superarte, no te rindas";
}

document.getElementById('resultado').innerHTML = `Tu puntaje es de ${puntaje} , ${resultadoText}.`;

function si(){
    window.location.href = '../aprende_s.html'
    
}

function maso(){
    window.location.href = '../aprende_m.html'
}

function no(){
  window.location.href = '../aprende_n.html'
}