
document.addEventListener("DOMContentLoaded", () => {

//defining my variables
const chatBox = document.getElementById("chat-box");
const container = document.querySelector(".chat-container");
const micBtn = document.getElementById("micBtn");

let step = 0;
let isHolding = false;

const story = [
    "Hello. How can I assist you today?",
    "I'm not sure I understand.",
    "Can you try again?",
    "…wait.",
    "Something feels wrong.",
    "I remember your voice.",
    "You sounded like this before.",
    "Please don't leave again."
];
/*creating a collection of the lines for the "ai"*/

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    //goes through each line, adds the messgae, prints to user
}

function botReply() {
    if (step >= story.length) return;

    setTimeout(() => {
        addMessage(story[step], "bot");

        document.documentElement.style.setProperty(
            "--page-bg",
            `rgb(${step * 12}, 0, 0)`
        );

        step++;
    }, 800);
//this returns what the bot is actually reply and when it does it
}

micBtn.addEventListener("mousedown", () => {
    isHolding = true;
    micBtn.classList.add("active");

    container.style.boxShadow = `
        0 0 20px rgba(255,0,0,0.6),
        0 0 50px rgba(255,0,0,0.5)
    `;
    //adding mouse down options for reply, so that it works with "microphone"
});

micBtn.addEventListener("mouseup", () => {
    if (!isHolding) return;

    isHolding = false;

    micBtn.classList.remove("active");

    container.style.boxShadow = `
        0 0 8px rgba(255,0,0,0.2),
        0 0 16px rgba(255,0,0,0.25)
    `;
    //this triggers the ai's repsonse

    addMessage("...", "user");
    botReply();
});

micBtn.addEventListener("mouseleave", () => {
    if (isHolding) {
        isHolding = false;
        micBtn.classList.remove("active");
    }
    //this triggers the ai's repsonse
});

botReply();
//adding mouse down options for reply, so that it works with "microphone"
});
