// script.js (optional)
async function fetchApod() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=6oiufHtcb6UD8HSk3nUJaEOvkGfcFCm3f1GOUOmX');
    const data = await response.json();
    const apodContainer = document.querySelector('.apod-container');
    apodContainer.innerHTML = `
        <img src="${data.url}" alt="APOD Image">
        <h2>${data.title}</h2>
        <p>${data.explanation}</p>
    `;
}

fetchApod();