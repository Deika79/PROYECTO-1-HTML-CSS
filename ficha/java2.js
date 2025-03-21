const realms = ["Valoria", "Betlands", "Anolath", "Silvania", "Wanlands", "Ravenheim"];
const genders = ["Masculino", "Femenino"];
const classes = {
    "Valoria": ["Rey-Caballero", "Sacerdote-Forjador", "Jinete de Águilas", "Inquisidor", "Inquisidor Secreto"],
    "Betlands": ["Chamán", "Guerrero de las Llanuras"],
    "Anolath": ["Caballero Oscuro", "Mago de Sangre"],
    "Silvania": ["Arquero", "Druida"],
    "Wanlands": ["Caballero del Sol Ardiente", "Asesino de las Sombras"],
    "Ravenheim": ["Raven Knight", "Mago de los Cuervos"]
};
const equipment = {
    "Rey-Caballero": ["Espada de Thymir", "Armadura Real Valeriana", "Escudo del León"],
    "Sacerdote-Forjador": ["Báculo ígneo", "Túnica de fuego", "Pergamino de llamas"],
    "Jinete de Águilas": ["Lanza de jinete", "Armadura ligera", "Águila entrenada"],
    "Inquisidor": ["Maza sagrada", "Escudo del Imperio", "Símbolo sagrado"],
    "Arquero": ["Arco largo élfico", "Capa de camuflaje", "Daga de caza"]
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("generate").addEventListener("click", function() {
    const realm = getRandomElement(realms);
    const gender = getRandomElement(genders);
    const charClass = getRandomElement(classes[realm]);
    const attributes = {
        "Fuerza": Math.floor(Math.random() * 10) + 8,
        "Destreza": Math.floor(Math.random() * 10) + 8,
        "Constitución": Math.floor(Math.random() * 10) + 8,
        "Inteligencia": Math.floor(Math.random() * 10) + 8,
        "Sabiduría": Math.floor(Math.random() * 10) + 8,
        "Carisma": Math.floor(Math.random() * 10) + 8
    };
    const items = equipment[charClass] || ["Daga oxidada", "Capa raída"];

    document.getElementById("char-name").textContent = "Personaje de " + realm;
    document.getElementById("char-realm").textContent = realm;
    document.getElementById("char-gender").textContent = gender;
    document.getElementById("char-class").textContent = charClass;
    document.getElementById("char-attributes").innerHTML = Object.keys(attributes).map(attr => `<li>${attr}: ${attributes[attr]}</li>`).join("");
    document.getElementById("char-equipment").innerHTML = items.map(item => `<li>${item}</li>`).join("");
    document.getElementById("char-image").src = "imagen" + Math.floor(Math.random() * 5 + 1) + ".png";
});