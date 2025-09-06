// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el elemento input y su valor
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        inputAmigo.focus();
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista. Ingrese un nombre diferente.');
        inputAmigo.focus();
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Actualizar la visualización de la lista
    mostrarAmigos();
    
    // Limpiar resultado anterior si existe y mostrar la lista
    limpiarResultado();
}

/**
 * Función para mostrar la lista de amigos en el HTML (SIN numeración)
 */
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Asegurarse de que la lista esté visible
    listaAmigos.style.display = 'block';
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Crear y agregar cada elemento de la lista SIN numeración
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo; // Solo el nombre, sin numeración
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para sortear un amigo secreto
 */
function sortearAmigo() {
    // Validar que haya al menos 1 amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agregue al menos un nombre para sortear.');
        document.getElementById('amigo').focus();
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSecretoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSecretoSeleccionado);
}

/**
 * Función para mostrar el resultado del sorteo
 */
function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    
    // OCULTAR la lista de amigos completamente
    listaAmigos.style.display = 'none';
    listaAmigos.innerHTML = '';
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear y mostrar SOLO el resultado en verde
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

/**
 * Función para limpiar el resultado anterior
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar resultado
    resultado.innerHTML = '';
    
    // Mostrar la lista de amigos nuevamente si hay amigos
    if (amigos.length > 0) {
        listaAmigos.style.display = 'block';
        mostrarAmigos(); // Re-mostrar la lista actualizada
    }
}

/**
 * Función para permitir agregar amigos con la tecla Enter
 */
function configurarEventos() {
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar event listener para la tecla Enter
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el input al cargar la página
    inputAmigo.focus();
}

/**
 * Inicializar la aplicación cuando se carga el DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    configurarEventos();
});