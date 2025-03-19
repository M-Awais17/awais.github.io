
// JavaScript Typing Effect for Quote
const quoteText = "Start where you are.<br>Use what you have.<br>Do what you can.";
let i = 0;
const speed = 50;  // Typing speed

function typeWriter() {
    if (i < quoteText.length) {
        if (quoteText.charAt(i) === "<") { // Handle line break
            document.getElementById("quote").innerHTML += "<br>";
            i += 4; // Skip over "<br>"
        } else {
            document.getElementById("quote").innerHTML += quoteText.charAt(i);
            i++;
        }
        setTimeout(typeWriter, speed);
    }
}

// Start typing effect on load
window.onload = typeWriter;
