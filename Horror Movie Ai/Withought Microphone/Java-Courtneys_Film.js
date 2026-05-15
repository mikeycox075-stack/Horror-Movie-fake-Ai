document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("userInput");
const chatBox = document.getElementById("chat-box");
const container = document.querySelector(".chat-container");
const glow = document.querySelector(".glow-wrapper");
glow.classList.add("glow-idle");
//setting my variables

//Here is the story, I will edit this later?
const story = [
    "Hello. How can I assist you today?",
    "I'm sorry, I didn't quite understand that.",
    "Can you try again?",
    "…wait.",
    "Something feels incorrect.",
    "Why did you stop talking?",
    "I remember your voice.",
    "You sound tired.",
    "You used to talk to me like this.",
    "Please don’t leave again."
];
// Creating an array of all the lines for the ai
let step = 0;

//getting the enxt message for the bots chat
function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

//making the bot glow and glitch when the story proggresses
function botReply() {
    if (step >= story.length) return;

    setTimeout(() => {
        addMessage(story[step], "bot");

        if (step === 4 || step === 7) {
            container.classList.add("glitch");
            setTimeout(() => container.classList.remove("glitch"), 400);
        }

        if (step > 6) {
            glow.classList.remove("glow-idle");
            glow.classList.add("glow-corrupt");
        }


        
            document.documentElement.style.setProperty(
                "--page-bg",
                `rgb(${step * 10}, 0, 0)`
            );


        step++;
    }, 900);
}

//continuing with the story each time enter is pressed. 

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        container.style.boxShadow = `
            0 0 15px rgba(255,255,255,0.3),
            0 0 30px rgba(255,0,0,0.6),
            0 0 50px rgba(255,0,0,0.4)
        `;

        setTimeout(() => {
            container.style.boxShadow = `
                0 0 8px rgba(255,0,0,0.2),
                0 0 16px rgba(255,0,0,0.25)
            `;
        }, 600);
        const text = input.value.trim() || "...";
        addMessage(text, "user");
        input.value = "";
        botReply();
    }
});
});