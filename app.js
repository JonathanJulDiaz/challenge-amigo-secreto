// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos
let amigos = [];

/**
 * Agrega un nombre a la lista 'amigos'
 */
function agregarAmigo() {
    // Obtenemos el input del HTML
    let inputAmigo = document.getElementById("amigo");

    // Se comprueba si el input es invalido
    let esInputInvalido = errorInput(inputAmigo.value);

    // Aca si el input es lo contrario a invalido, es decir, valido, se cumple la condición
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
        // Se muestra el nombre debajo del input
        nombre = mostrarAmigos(nombre);

        // Se guarda el nombre al final de la lista 'amigos'
        amigos.push(nombre);
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

    // Si hay al menos un nombre en la lista amigos, recorreremos la
    // lista, para compararlo con el String 'nombre'
    if (amigos.length > 0) {
        for (let i = 0; i < amigos.length; i++) {
            if (nombre.toLowerCase() === amigos[i].toLowerCase()) {
                alert("No se pueden repetir nombres");

                // Si es igual a otro String en la lista, cambiamos la
                // variable 'repetido' a true y rompemos el ciclo
                repetido = true;
                break;
            }
        }
    }

    return repetido;
}

/**
 * Muestra los nombres agregados a la lista en el 'ul' del HTML
 * 
 * @param {String} inputAmigo Nombre del amigo
 * @returns {String} El nombre del amigo agregado
 */
function mostrarAmigos(inputAmigo) {
    // Obtenemos la lista 'ul' que esta debajo del input del HTML
    let lista = document.getElementById("listaAmigos");

    // Creamos un nuevo elemento 'li'
    let nuevo = document.createElement("li");

    // Capitalizamos el nombre del amigo
    let nombre = capitalizarNombre(inputAmigo);

    // Ponemos el texto del 'li' como el nombre del amigo agregado
    nuevo.textContent = nombre;

    // Le creamos el boton para eliminar
    botonEliminar(nuevo, lista);

    // Y finalmente lo ponemos dentro de la lista 'ul'
    lista.appendChild(nuevo);

    return nombre;
}

/**
 * Verifica si el input del usuario es un nombre valido
 * @param {String} inputAmigo Input del usuario
 * @returns {boolean} Devuelve false si el input es un nombre valido, true en caso contrario
 */
function errorInput(inputAmigo) {
    // Variable que dirá si el input es invalido
    let invalido = true;

    // Conjunto de caracteres validos para el input
    const regex = /^[A-Za-z\u00C0-\u00FF\u0100-\u017F\s]+$/;
    
    // Si el usuario pone un espacio en blanco al principio o final del input
    if (inputAmigo[inputAmigo.length - 1] == " " || inputAmigo[0] == " ") {
        alert("No puede agregar espacios al final o al principio del nombre");
    }
    // Por si el usuario ingresa el input vacio
    else if (inputAmigo.length == 0) {
        alert("No puede agregar nombres vacios");
    }
    // Aqui se prueba si el input contiene algun caracter diferente a letras
    else if (!regex.test(inputAmigo)) {
        alert("El nombre solo debe contener letras");
    }
    // Tambien se validará si el nombre tiene menos de 3 letras o ninguna
    else if (inputAmigo.length < 3) {
        alert("Agregue un nombre con al menos 3 letras");
    }
    // Si ninguno de los casos anteriores ocurre, entonces el input es un nombre valido
    else {
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
        // y tambien limpiamos la lista de los sorteados
        lista.removeChild(lista.children[indexRandom]);

        amigos.pop(indexRandom);

        // Si se mostró un amigo sorteado antes, borrarlo
        if (listaSorteada.childElementCount > 0) {
            listaSorteada.removeChild(listaSorteada.children[0]);
        }

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

/**
 * Agrega un botón de eliminación a un elemento de lista y configura su funcionalidad.
 * 
 * @param {HTMLElement} nuevoElemento - El elemento de lista al que se añadirá el botón de eliminación.
 * @param {HTMLElement} lista - La lista que contiene el elemento a eliminar.
 * 
 * Descripción: El botón de eliminación permite quitar el elemento de la lista visual y 
 * también eliminar el nombre asociado de la lista de amigos.
 */
function botonEliminar(nuevoElemento, lista) {
    nuevoElemento.appendChild(document.createElement("button"));

    // Creamos un nuevo 'button'
    let boton = nuevoElemento.children[0];

    // Configuramos el tamaño del botón
    // Lo hacemos auto para que el tamaño sea el minimo necesario
    // para contener el texto "Eliminar"
    boton.style.width = "auto";
    boton.style.height = "auto";

    // Añadimos un poco de padding y margen a la izquierda para que el
    // botón no se vea tan pegado al texto
    boton.style.padding = "2px";
    boton.style.marginLeft = "10px";

    // Ponemos el texto del 'button' como 'X'
    boton.textContent = "Eliminar";

    // Configuramos el color del texto del botón como rojo para
    // que se vea más visible
    boton.style.color = "red";

    // Configuramos el fondo del botón como gris claro para que
    // se vea bien en la lista
    boton.style.backgroundColor = "#adacac";

    // Configuramos la función que se ejecutará al hacer clic en el botón
    boton.onclick = function () {
        // Obtenemos el padre del botón, que es el 'li'
        let li = this.parentNode;

        // Borramos el nombre del amigo de la lista
        amigos.pop(amigos.indexOf(li.textContent));

        // Borramos el 'li' de la lista
        lista.removeChild(li);
    };
}

/**
 * Capitaliza el primer caracter de una cadena y devuelve el resultado.
 * @param {String} nombre - El nombre a capitalizar.
 * @returns {String} El nombre con el primer caracter capitalizado.
 */
function capitalizarNombre(nombre) {
    let partesNombre = nombre.split(" ");
    
    // Iteramos sobre cada palabra del array y la capitalizamos
    for (let i = 0; i < partesNombre.length; i++) {
        // Tomamos el primer caracter de la palabra y lo convertimos a mayuscula
        // y lo concatenamos con el resto de la palabra
        primeraLetra = partesNombre[i][0].toUpperCase();
        restoPalabra = partesNombre[i].slice(1).toLowerCase();
        partesNombre[i] = primeraLetra + restoPalabra;
    }

    // Unimos la cadena con los espacios en blanco para formar la cadena final
    nombre = partesNombre.join(" ");

    return nombre;
}

/**
 * Se ejecuta cuando el contenido del documento ha sido cargado.
 * Selecciona automaticamente el input para que el usuario pueda
 * escribir un nombre y agregarlo sin necesidad de hacer clic en el input.
 */
window.onload = function () {
    let input = document.getElementById("amigo").focus();
}

añadirAmigoConEnter();