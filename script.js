// PREGUNTAS Y RESPUESTAS
const preguntas = [
    {
        pregunta: "¿Cuál de estos valores te define mejor?",
        opciones: [
            { texto: "Disciplina y conquista", reino: "Valoria" },
            { texto: "Sed de sangre y saqueo", reino: "Mayholm" },
            { texto: "Honor y melancolía", reino: "Anolath" },
            { texto: "Naturaleza y chamanismo", reino: "Betlands" },
            { texto: "Sigilo y astucia", reino: "Silvania" }
        ]
    },
    {
        pregunta: "¿Qué tipo de arma prefieres?",
        opciones: [
            { texto: "Espada y escudo", reino: "Valoria" },
            { texto: "Hacha y cuchillos", reino: "Mayholm" },
            { texto: "Espada larga o lanza", reino: "Anolath" },
            { texto: "Arco y lanza de caza", reino: "Betlands" },
            { texto: "Dagas envenenadas y arco", reino: "Silvania" }
        ]
    },
    {
        pregunta: "¿Dónde preferirías vivir?",
        opciones: [
            { texto: "Fortaleza imperial", reino: "Valoria" },
            { texto: "Un barco pirata", reino: "Mayholm" },
            { texto: "Un castillo sombrío", reino: "Anolath" },
            { texto: "Las llanuras salvajes", reino: "Betlands" },
            { texto: "Un bosque profundo", reino: "Silvania" }
        ]
    }
];

// OBJETO PARA ASIGNAR IMÁGENES A CADA REINO
const imagenesReinos = {
    Valoria: "valoria.png",
    Mayholm: "mayholm.png",
    Anolath: "anolath.png",
    Betlands: "betlands.png",
    Silvania: "silvania.png"
};

// VARIABLES DEL JUEGO
let preguntaActual = 0;
let respuestas = {
    Valoria: 0,
    Mayholm: 0,
    Anolath: 0,
    Betlands: 0,
    Silvania: 0
};

// ELEMENTOS DEL DOM
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const siguienteBoton = document.getElementById("siguiente");
const resultadoContainer = document.getElementById("resultado-container");
const resultadoTexto = document.getElementById("resultado-texto");
const resultadoImagen = document.getElementById("resultado-imagen");
const atrasBoton = document.getElementById("atras"); // Ahora se selecciona correctamente

// FUNCIÓN PARA CARGAR UNA PREGUNTA
function cargarPregunta() {
    const preguntaActualData = preguntas[preguntaActual];
    preguntaElemento.textContent = preguntaActualData.pregunta;
    opcionesElemento.innerHTML = "";

    preguntaActualData.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion.texto;
        boton.classList.add("opcion");
        boton.onclick = () => seleccionarOpcion(opcion.reino);
        opcionesElemento.appendChild(boton);
    });
}

// FUNCIÓN PARA SELECCIONAR UNA OPCIÓN
function seleccionarOpcion(reino) {
    respuestas[reino]++;
    siguienteBoton.style.display = "block"; // Mostrar botón "Siguiente"
}

// FUNCIÓN PARA PASAR A LA SIGUIENTE PREGUNTA
function siguientePregunta() {
    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        cargarPregunta();
        siguienteBoton.style.display = "none"; // Ocultar botón después de avanzar
    } else {
        determinarReino();
    }
}

// FUNCIÓN PARA DETERMINAR EL REINO FINAL
function determinarReino() {
    let reinoFinal = Object.keys(respuestas).reduce((a, b) => respuestas[a] > respuestas[b] ? a : b);

    // Mostrar resultado
    resultadoTexto.textContent = `Perteneces a ${reinoFinal}`;
    resultadoImagen.src = imagenesReinos[reinoFinal]; // Asignar imagen del reino
    resultadoImagen.alt = `Guerrero de ${reinoFinal}`;
    
    // Mostrar contenedor de resultado y ocultar el test
    document.getElementById("test-container").style.display = "none";
    resultadoContainer.style.display = "block";
}

// FUNCIÓN PARA REINICIAR EL TEST
function reiniciarTest() {
    preguntaActual = 0;
    respuestas = { Valoria: 0, Mayholm: 0, Anolath: 0, Betlands: 0, Silvania: 0 };
    
    // Mostrar el test y ocultar el resultado
    resultadoContainer.style.display = "none";
    document.getElementById("test-container").style.display = "block";
    
    cargarPregunta();
}

// EVENTO PARA REINICIAR TEST
atrasBoton.addEventListener("click", reiniciarTest);

// INICIALIZAR TEST
cargarPregunta();
