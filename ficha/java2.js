const realms = ["Valoria", "Betlands", "Anolath", "Silvania", "Wanlands", "Ravenheim"];
const genders = ["Masculino", "Femenino"];
const classes = {
    "Valoria": ["Rey-Caballero", "Sacerdote-Forjador", "Jinete de Águilas", "Inquisidor", "Inquisidor Secreto"],
    "Betlands": ["Chamán", "Guerrero de las Llanuras"],
    "Anolath": ["Caballero Oscuro", "Mago de Sangre"],
    "Silvania": ["Arquero", "Druida"],
    "Wanlands": ["Caballero del Sol Ardiente", "Cultista del Sol Radiante"],
    "Ravenheim": ["Raven Knight", "Mago de los Cuervos"]
};
const equipment = {
    "Rey-Caballero": ["Espada de Thymir", "Armadura Real Valeriana", "Escudo del León"],
    "Sacerdote-Forjador": ["Báculo ígneo", "Túnica de fuego", "Pergamino de llamas"],
    "Jinete de Águilas": ["Lanza de jinete", "Armadura ligera", "Águila entrenada"],
    "Inquisidor": ["Maza sagrada", "Escudo del Imperio", "Símbolo sagrado"],
    "Arquero": ["Arco largo", "Capa de camuflaje", "Daga de caza"],
    "Chamán": ["Vara", "2 pociones de curación", "Daga de caza"],
    "Guerrero de las Llanuras": ["Arco largo", "Espada corta", "Daga de caza"],
    "Caballero Oscuro": ["Armadura pesada", "Espada Larga", "Escudo"],
    "Mago de Sangre": ["Daga ritual", "Libro de Hechizos", "Saquito de componentes"],
    "Druida": ["Libro de conjuros", "Capa ritual", "Daga de caza"],
    "Caballero del Sol Ardiente": ["Espada larga", "Capa de camuflaje", "Daga ritual"],
    "Cultista del Sol Radiante": ["Espada corta", "Armadura de cuero", "Arco corto"],
    "Raven Knight": ["Espada larga", "Armadura completa", "Escudo"],
    "Mago de los Cuervos": ["Túnica ritual", "Bolsita de componentes", "Daga ritual"]
};

// Mapa de imágenes
const imageMap = {
    "Valoria": {
        "Masculino": {
            "Rey-Caballero": "1.png",
            "Sacerdote-Forjador": "5.png",
            "Jinete de Águilas": "valoria_masculino_jinete.png",
            "Inquisidor": "3.png",
            "Inquisidor Secreto": "3.png"
        },
        "Femenino": {
            "Rey-Caballero": "2.png",
            "Sacerdote-Forjador": "6.png",
            "Jinete de Águilas": "valoria_femenino_jinete.png",
            "Inquisidor": "4.png",
            "Inquisidor Secreto": "4.png"
        }
    },
    "Betlands": {
        "Masculino": {
            "Chamán": "7.png",
            "Guerrero de las Llanuras": "9.png"
        },
        "Femenino": {
            "Chamán": "8.png",
            "Guerrero de las Llanuras": "10.png"
        }
    },
    "Anolath": {
        "Masculino": {
            "Caballero Oscuro": "11.png",
            "Mago de Sangre": "13.png"
        },
        "Femenino": {
            "Caballero Oscuro": "12.png",
            "Mago de Sangre": "14.png"
        }
    },
    "Silvania": {
        "Masculino": {
            "Arquero": "15.png",
            "Druida": "17.png"
        },
        "Femenino": {
            "Arquero": "16.png",
            "Druida": "18.png"
        }
    },
    "Wanlands": {
        "Masculino": {
            "Caballero del Sol Ardiente": "19.png",
            "Cultista del Sol Radiante": "21.png"
        },
        "Femenino": {
            "Caballero del Sol Ardiente": "20.png",
            "Cultista del Sol Radiante": "22.png"
        }
    },
    "Ravenheim": {
        "Masculino": {
            "Raven Knight": "23.png",
            "Mago de los Cuervos": "25.png"
        },
        "Femenino": {
            "Raven Knight": "24.png",
            "Mago de los Cuervos": "26.png"
        }
    }
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

    // Obtener la imagen correspondiente
    const imageSrc = imageMap[realm]?.[gender]?.[charClass] || "default.png";

    document.getElementById("char-name").textContent = "Personaje de " + realm;
    document.getElementById("char-realm").textContent = realm;
    document.getElementById("char-gender").textContent = gender;
    document.getElementById("char-class").textContent = charClass;
    document.getElementById("char-attributes").innerHTML = Object.keys(attributes).map(attr => `<li>${attr}: ${attributes[attr]}</li>`).join("");
    document.getElementById("char-equipment").innerHTML = items.map(item => `<li>${item}</li>`).join("");
    document.getElementById("char-image").src = `images/${imageSrc}`;
});
