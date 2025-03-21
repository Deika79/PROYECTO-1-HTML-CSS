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
            "Guerrero de las Llanuras": "betlands_femenino_guerrero.png"
        }
    },
    "Anolath": {
        "Masculino": {
            "Caballero Oscuro": "anolath_masculino_caballero.png",
            "Mago de Sangre": "anolath_masculino_mago.png"
        },
        "Femenino": {
            "Caballero Oscuro": "anolath_femenino_caballero.png",
            "Mago de Sangre": "anolath_femenino_mago.png"
        }
    },
    "Silvania": {
        "Masculino": {
            "Arquero": "silvania_masculino_arquero.png",
            "Druida": "silvania_masculino_druida.png"
        },
        "Femenino": {
            "Arquero": "silvania_femenino_arquero.png",
            "Druida": "silvania_femenino_druida.png"
        }
    },
    "Wanlands": {
        "Masculino": {
            "Caballero del Sol Ardiente": "wanlands_masculino_caballero.png",
            "Cultista del Sol Radiante": "wanlands_masculino_cultista.png"
        },
        "Femenino": {
            "Caballero del Sol Ardiente": "wanlands_femenino_caballero.png",
            "Cultista del Sol Radiante": "wanlands_femenino_cultista.png"
        }
    },
    "Ravenheim": {
        "Masculino": {
            "Raven Knight": "ravenheim_masculino_knight.png",
            "Mago de los Cuervos": "ravenheim_masculino_mago.png"
        },
        "Femenino": {
            "Raven Knight": "ravenheim_femenino_knight.png",
            "Mago de los Cuervos": "ravenheim_femenino_mago.png"
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
