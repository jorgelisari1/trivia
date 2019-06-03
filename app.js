//seleccionar elemento  atraves de un id;
//llamar al javascript

const botonuno= document.getElementById('capturar-name');
const nombreusuario= document.getElementById('name');
const botonmusic= document.getElementById('music');

function guardar(){
  const nombreU = nombreusuario.value;
  const escribirnombre =document.getElementById('writename');
  writename.innerHTML ='hola '+ nombreU + ', un placer que juegues con nosotros';
document.getElementById('pantalla1').style.display= 'none';
document.getElementById('tema1').style.display = 'none';
document.getElementById('pantalla2').style.display = 'block';

  }

function resultado1() {
let p1, p2, p3, p4, nota, incorrectas;

//preguta1
if (document.getElementById('p11').checked==true) {p1=1}
else {p1=0}
//pregunta2
if (document.getElementById('p22').checked==true) {p2=1}
else {p2=0}
//pregunta3
if (document.getElementById('p33').checked==true) {p3=1}
else {p3=0}
//pregunta4
if (document.getElementById('p44').checked==true) {p4=1}
else {p4=0}

nota=p1+p2+p3+p4;
incorrectas= 4-nota;
  writeresult.innerHTML ='Aciertos '+ nota + ' y desaciertos '+incorrectas;

  document.getElementById('tema1').style.display = 'none';
  document.getElementById('volverajugar').style.display = 'block';

}

function resultado2() {
let p1, p2, p3, p4, nota,incorrectas;

//pregunta 1
if (document.getElementById('p51').checked==true) {p1=1}
else {p1=0}
//pregunta 2
if (document.getElementById('p62').checked==true) {p2=1}
else {p2=0}
//pregunta3
if (document.getElementById('p73').checked==true) {p3=1}
else {p3=0}
//pregunta4
if (document.getElementById('p84').checked==true) {p4=1}
else {p4=0}

nota=p1+p2+p3+p4;
incorrectas= 4-nota;
  writeresult.innerHTML ='Aciertos '+ nota + ' y desaciertos '+incorrectas;
  document.getElementById('tema2').style.display = 'none';
  document.getElementById('volverajugar').style.display = 'block';

}

function geo(){
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('tema1').style.display = 'block';
};
function art(){
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('tema2').style.display = 'block';
};
