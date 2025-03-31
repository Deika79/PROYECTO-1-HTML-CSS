document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", async () => {
        const question = userInput.value.trim();
        if (question === "") return;

        addMessage("Tú", question);
        userInput.value = "";

        try {
            const response = await getOracleResponse(question);
            addMessage("Oráculo", response);
        } catch (error) {
            addMessage("Oráculo", "No puedo ver el destino en este momento...");
            console.error("Error obteniendo respuesta del oráculo:", error);
        }
    });

    function addMessage(sender, text) {
        const message = document.createElement("p");
        message.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function getOracleResponse(question) {
        const endpoint = "https://deika79.github.io/PROYECTO-1-HTML-CSS/oraculo"; // Aquí debes poner la URL de tu backend

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pregunta: question })
        });

        const data = await response.json();
        return data.respuesta;
    }
});
