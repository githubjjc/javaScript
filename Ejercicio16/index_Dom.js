const enlaces = document.getElementsByTagName('a');
const cantEnlace =enlaces.length;


const direccionPenultiomEnlace = enlaces[enlaces.length-2].href;


const parrafos = document.getElementsByTagName('p');
const enlacesP = parrafos[2].getElementsByTagName("a");
const cantEnlace3P = enlacesP.length;

var elemento = document.createElement('elemento');
elemento.innerHTML =  "<font color='red'>" +elemento.innerHTML + "<br/>" +"Numero de enlaces del tercer párrafo = "+cantEnlace +  "</font>";
elemento.innerHTML =  "<font color='red'>" +elemento.innerHTML + "<br/>" +"Numero de enlaces del tercer párrafo = "+direccionPenultiomEnlace +  "</font>";
elemento.innerHTML =  "<font color='red'>" +elemento.innerHTML + "<br/>" +"Numero de enlaces del tercer párrafo = "+cantEnlace3P +  "</font>";
document.body.appendChild (elemento); 
