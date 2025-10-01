const recommendations = [
    {
    title: "Name Of The Wind",
    series: "The Kingkiller Chronicles",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    rating: 5,
    cover: "images/notw.jpg",
    pros: ["Engaging storytelling", "Rich world-building", "Complex characters"],
    cons: ["Pacing can be slow at times", "Some plot points left unresolved, third book may never come out"],
    
    },
    {
    title: "The Blade Itself",
    series: "First Law",
    author: "Joe Abercrombie",
    genre: "Fantasy",
    rating: 4.5,
    cover: "images/firstlaw.jpg",
    pros: ["Grimdark", "World-building", "Political"],
    cons: ["Some Cliches", "Some characters are unlikeable"],
    }
]

const rec_div = document.getElementById("rec_div");
const rec_button = document.getElementById("rec_button");

function randRecommendation() {
    const random = Math.floor(Math.random() * recommendations.length);
    return recommendations[random];
}

function displayRecommendation(recommendation){
    rec_div.innerHTML = `
    <h2>${recommendation.title}</h2>
    <h3>by ${recommendation.author}</h3>
    <img src="${recommendation.cover}" alt="${recommendation.title} cover" width="200">
    <p><strong>Series:</strong> ${recommendation.series}</p>
    <p><strong>Genre:</strong> ${recommendation.genre}</p>
    <p><strong>Rating:</strong> ${'★'.repeat(recommendation.rating)}${'☆'.repeat(5 - recommendation.rating)}</p>
    <p><strong>Pros:</strong></p>
    <ul>${recommendation.pros.map(pro => `<li>${pro}</li>`).join('')}</ul>
    <p><strong>Cons:</strong></p>
    <ul>${recommendation.cons.map(con => `<li>${con}</li>`).join('')}</ul>
    `;
}

displayRecommendation(randRecommendation());


rec_button.addEventListener("click", () => {
    displayRecommendation(randRecommendation());
});