// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Lista de amigos

/**
 * Agrega un nombre(String) a la lista 'amigos'
 */
function agregarAmigo() {
    // Obtenemos el input del HTML
    let inputAmigo = document.getElementById("amigo");

    // Se comprueba si el input es invalido
    let esInputInvalido = errorInput(inputAmigo.value);

    // Aca si el input es lo contrario a invalido, es decir valido, se cumple la condición
    if(!esInputInvalido){
        guardarNombre(inputAmigo.value);
    }

    // Y se borra el input anterior
    inputAmigo.value = '';
}

/**
 * Se guarda y se muestra el nombre del amigo escrito
 * @param {String} input Nombre del amigo
 */
function guardarNombre(input) {
    // Se guarda el nombre al final de la lista 'amigos'
    amigos.push(input);

    // Se muestra el nombre debajo del input
    mostrarAmigos(input);
}

/**
 * Muestra los nombres agregados a la lista en el 'ul' del HTML
 * @param {String} inputAmigo Nombre del amigo
 */
function mostrarAmigos(inputAmigo) {
    // Obtenemos la lista 'ul' que esta debajo del input del HTML
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista para que no haya duplicados
    lista.innerHTML = "";

    // Creamos un nuevo elemento 'li'
    let nuevo = document.createElement("li");

    // Ponemos el texto del 'li' como el nombre del amigo agregado
    nuevo.textContent = inputAmigo;

    // Y finalmente lo ponemos dentro de la lista 'ul'
    lista.appendChild(nuevo);
}

/**
 * Verifica si el input del usuario es un nombre valido
 * @param {String} inputAmigo Input del usuario
 * @returns {boolean} Devuelve false si el input es un nombre valido, true en caso contrario
 */
function errorInput(inputAmigo) {
    // Variable que dirá si el input es invalido
    let invalido = true;
    
    // Conjunto de caracteres invalidos(puntos, numeros, etc.)
    const regex = /[^a-zA-Z\s]/;

    // Aqui se prueba si el input contiene algun caracter diferente a letras
    if (regex.test(inputAmigo)) {
        alert("El nombre solo debe contener letras");
    }
    // Tambien se validará si el nombre tiene menos de 3 letras o ninguna
    else if(inputAmigo.length < 3) {
        alert("No puede agregar nombres vacios");
    }
    else {
        // Si ninguno de los casos anteriores ocurre, entonces el input es un nombre valido
        invalido = false;
    }

    return invalido;
}