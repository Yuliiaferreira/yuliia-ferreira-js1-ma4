const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = baseUrl + "games";

function createGames(response) {
    return response.json();
}
function returnJson(json) {
    const results = json.results;
    console.dir(results);

    const resultsDiv = document.querySelector(".results");
    let html = ""; 

    results.forEach(result => {
   
        html += `<div class="game">
                    <h2>${result.name}</h2>
                    <img src="${result.image}" alt="${result.name}">
                </div>` 
         
    });

    resultsDiv.innerHTML = html;
}
function returnError(error) {
    console.log(error);
    
}
fetch(gamesUrl)
    .then(createGames)
    .then(returnJson)
    .catch(returnError);




