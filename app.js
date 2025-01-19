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
    if (!esInputInvalido) {
        guardarNombreUnico(inputAmigo.value);
    }

    // Y se borra el input anterior
    inputAmigo.value = '';
}

/**
 * Se guarda y se muestra el nombre del amigo escrito si no es un nombre repetido
 * @param {String} input Nombre del amigo
 */
function guardarNombreUnico(nombre) {
    // Si el nombre que se ingresó no esta repetido en la lista de 'amigos', se guarda
    if (!nombreRepetido(nombre)) {
        // Se guarda el nombre al final de la lista 'amigos'
        amigos.push(nombre);

        // Se muestra el nombre debajo del input
        mostrarAmigos(nombre);
    }
}

/**
 * Verifica si el nombre dado esta repetido en la lista 'amigos'
 * @param {String} nombre Nombre de amigo a verificar su repetición
 * @returns Devuelve true si esta el nombre repetido en la lista, false en caso contrario
 */
function nombreRepetido(nombre) {
    // Creamos una variable que retornaremos para saber si el nombre esta repetido
    let repetido = false;

    // Si hay al menos un nombre en la lista amigos, recorreremos la lista, para compararlo con el String 'nombre'
    if (amigos.length > 0) {
        for (let i = 0; i < amigos.length; i++) {
            if (nombre.toLowerCase() === amigos[i].toLowerCase()) {
                alert("No se pueden repetir nombres");

                // Si es igual a otro String en la lista, cambiamos la variable 'repetido' a true y rompemos el ciclo
                repetido = true;
                break;
            }
        }
    }

    return repetido;
}

/**
 * Muestra los nombres agregados a la lista en el 'ul' del HTML
 * @param {String} inputAmigo Nombre del amigo
 */
function mostrarAmigos(inputAmigo) {
    // Obtenemos la lista 'ul' que esta debajo del input del HTML
    let lista = document.getElementById("listaAmigos");

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
    const regex = /^[A-Za-z\u00C0-\u00FF\u0100-\u017F\s]+$/;

    // Aqui se prueba si el input contiene algun caracter diferente a letras
    if (!regex.test(inputAmigo)) {
        alert("El nombre solo debe contener letras");
    }
    // Tambien se validará si el nombre tiene menos de 3 letras o ninguna
    else if (inputAmigo.length < 3) {
        if (inputAmigo.length == 0) {
            alert("No puede agregar nombres vacios");
        }
        else {
            alert("Agregue un nombre con al menos 3 letras");
        }
    }
    else {
        // Si ninguno de los casos anteriores ocurre, entonces el input es un nombre valido
        invalido = false;
    }

    return invalido;
}

/**
 * Selecciona un nombre aleatorio entre la lista 'amigos' y la muestra en la pagina
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para poder sortear");
    }
    else {
        // Primero usamos Math.floor() y Math.random() para guardar un
        // numero aleatorio entre 0 y la cantidad de nombres en 'amigos'
        let indexRandom = Math.floor(Math.random() * amigos.length);

        // Guardamos la lista HTML donde mostraremos el amigo sorteado en una variable
        let listaSorteada = document.getElementById("resultado");

        // Guardamos la lista de nombres guardados en una variable
        let lista = document.getElementById("listaAmigos");

        // Guardamos el nombre del amigo sorteado en una variable
        let nombreAmigoSorteado = amigos[indexRandom];

        // Eliminamos el nombre de la lista HTML y de la lista de 'amigos'
        lista.removeChild(lista.children[indexRandom]);

        amigos.pop(indexRandom);

        // Creamos un nuevo elemento de lista HTML
        let amigoSorteado = document.createElement("li");

        // Y le ponemos un texto con el nombre del amigo sorteado
        amigoSorteado.textContent = "El amigo secreto sorteado es: " + nombreAmigoSorteado;

        // Finalmente lo ponemos en la lista HTML para mostrarlo en la pagina
        listaSorteada.appendChild(amigoSorteado);
    }
}

/**
 * Agrega la funcionalidad de que al presionar la tecla "Enter" en el input,
 * se active la función del botón "Añadir" como si se hubiera presionado.
 */
function añadirAmigoConEnter() {
    // Obtener el input
    var input = document.getElementById("amigo");

    // Ejecutar una función cuando el usuario presiona una tecla en el teclado
    input.addEventListener("keypress", function (event) {
        // Si el usuario presiona la tecla "Enter" en el teclado
        if (event.key === "Enter") {
            // Cancelar la acción predeterminada, si es necesario
            event.preventDefault();
            // Activar la función del boton al ser presionado
            agregarAmigo();
        }
    });
}

añadirAmigoConEnter();