// script.js

// Check if browser supports SpeechRecognition
const startBtn = document.getElementById("start-btn");
const output = document.getElementById("output");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'en-US';  // Set the language of speech
recognition.continuous = false;  // Stop when the user finishes speaking
recognition.interimResults = false;  // Only final results

startBtn.addEventListener('click', () => {
    recognition.start();  // Start listening
    output.textContent = "Listening...";
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;  // Get the speech as text
    output.textContent = `You said: "${transcript}"`;

    // Perform a search based on the speech
    performSearch(transcript);
};

recognition.onerror = (event) => {
    if (event.error === 'audio-capture') {
        output.textContent = "Please allow microphone access and try again.";
    } else if (event.error === 'not-allowed') {
        output.textContent = "Microphone access was denied. Please enable it and try again.";
    } else {
        output.textContent = `Error occurred: ${event.error}`;
    }
};

// Function to perform search based on voice command
function performSearch(query) {
    // Redirect the browser to search using the query
    const searchQuery = encodeURIComponent(query);
    const searchURL = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchURL, '_blank');
}
