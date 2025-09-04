const figure = document.getElementById('figure');

function circulo(){
    figure.style.borderRadius = '50%';
    figure.style.background = "lighblue";
    
}
function estrella(){
    figure.style.borderRadius = '0';
    figure.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    figure.style.background ="lightblue";

}
function gif(){
    figure.style.backgroundImage = "url('img/minions.gif')";
    figure.style.backgroundSize = 'cover';
 
   }


function animacion(){
    figure.classList.add('animado');

}
function arriba (){
    figure.classList.toggle("top");
    figure.style.background = "#000000ff";
}


function abajo (){
    figure.classList.toggle("down");
    figure.style.background = "#000000ff";
}

function izquierda(){
    figure.classList.toggle("left");
    figure.style.background = "#000000ff";


}
function derecha(){
    figure.classList.toggle("right");
    figure.style.background = "#dc96dfff";

}



function titulo(){
    const mainTitle = document.getElementById("mainTitle");
    const nuevoTitulo = prompt("Escribe el nuevo título:");

    if (nuevoTitulo) {
        mainTitle.textContent = nuevoTitulo;
    }
}

function parrafo(){
    const parafo = document.getElementById("mainParagraph");
    const nuevoParafo = prompt("Escribe el nuevo párrafo:");

    if (nuevoParafo) {
        parafo.textContent = nuevoParafo;
    }
}

function agregarParrafo(){
    const adicionar = document.getElementById('extraParagraphs')
    const agregar= prompt("Escribe el texto para el nuevo párrafo")

    if (agregar) {
        adicionar.textContent = agregar;
    }
}

function eliminar(){
  const elimina = document.getElementById("extraParagraphs");
    if (elimina.lastChild) {
    elimina.removeChild(elimina.lastChild);
  } else {
    alert("No hay párrafos para eliminar.");
  }
}







document.addEventListener('DOMContentLoaded', function(){


document.getElementById('btnCircle').addEventListener('click', circulo); // CIRCULOOO 
document.getElementById('btnStar').addEventListener('click', estrella ); // ESTRELLA 
document.getElementById('btnGif').addEventListener('click', gif ); // gif 
document.getElementById('btnAnim').addEventListener('click', animacion ); // animacion a la figura 
document.getElementById('btnMoveUp').addEventListener('click', arriba); // figura hacia arriba 
document.getElementById('btnMoveDown').addEventListener('click', abajo);  // figura hacia abajo 
document.getElementById('btnMoveLeft').addEventListener('click' , izquierda);  // figura a la izquierda 
document.getElementById('btnMoveRight').addEventListener('click', derecha); // figura a la derecha 
document.getElementById('btnChangeTitle').addEventListener('click', titulo );
document.getElementById('btnChangeParagraph').addEventListener('click', parrafo ); // cambiar parrafo 
document.getElementById('btnAddParagraph').addEventListener('click', agregarParrafo);
document.getElementById('btnRemoveParagraph').addEventListener('click', eliminar);



})


