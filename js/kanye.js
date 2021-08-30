const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

const displayQuotes = quote => {

    const quotesContainer = document.getElementById('quote');
    quotesContainer.innerText = quote.quote;
}

document.getElementById('click').addEventListener('click', function () {
    loadQuotes();
});