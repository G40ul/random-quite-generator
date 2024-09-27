const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "People who are crazy enough to think they can change the world, are the ones who do.",
    "Failure will never overtake me if my determination to succeed is strong enough."
];

const quoteButton = document.getElementById('quoteButton');
const quoteDisplay = document.getElementById('quoteDisplay');

quoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerHTML = quotes[randomIndex];
});
