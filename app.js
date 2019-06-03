const varUno = document.getElementById('usuario');
const varDos = document.getElementById('mensaje');


function hola() {
  const nombreUsuario = varUno.value;
  console.log(nombreUsuario);
  varDos.innerHTML = "Hola " + varUno.value + " ¿Lista para jugar?"
}


window.onload = function() {
    a = 0;
    mensaje1.innerHTML = preguntaUno;
    opcion1.innerHTML = opcionesUno;
    click1.innerHTML = "<button onclick=set002()>Siguiente</button>";
}

function correctoUno() {
    a = 1;
}

function erradoUno() {
    a = 0;
}

function set002() {
    b = 0;
    mensaje1.innerHTML = preguntaDos;
    opcion1.innerHTML = opcionesDos;
    click1.innerHTML = "<button onclick=set003()>Siguiente</button>";
}

function correctoDos() {
    b = 1;
}

function erradoDos() {
    b = 0;
}

function set003() {
    c = 0;
    mensaje1.innerHTML = preguntaTres;
    opcion1.innerHTML = opcionesTres;
    click1.innerHTML = "<button onclick=result001()>Resultado</button>";
}

function correctoTres() {
    c = 1;
}

function erradoTres() {
    c = 0;
}

function result001() {
    z = a + b + c;
    mensaje1.innerHTML = "Fin del Juego";
    opcion1.innerHTML = "";
    comentario1.innerHTML = "Tu puntaje es: " + z;
    click1.innerHTML = "<button onclick=repeat001()>Intenta de nuevo</button>";
}

function repeat001() {
    location.reload();
}
