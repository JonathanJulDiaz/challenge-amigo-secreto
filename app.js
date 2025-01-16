// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    amigos.push(inputAmigo.value);
    mostrarAmigos(inputAmigo.value);

    inputAmigo.value = '';
}

function mostrarAmigos(inputAmigo){
    let lista = document.getElementById("listaAmigos");

    let nuevo = document.createElement("li");

    nuevo.textContent = inputAmigo;

    lista.appendChild(nuevo);
}