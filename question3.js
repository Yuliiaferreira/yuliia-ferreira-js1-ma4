const baseUrl = "https://api.rawg.io/api/";
const createUrl = `${baseUrl}games/4200`;

fetch(createUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGameDetails(results) {
    //const results = json.results;
    console.dir(results);

    const resultsDiv = document.querySelector(".container");
    let html = ""; 

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/1000";
        if(result.image) {
        imageUrl = result.image;
        }
        html += `<div class="container">
                    <h1>${result.name}</h1>
                    <div class="image" style="background-image: url('${imageUrl}')"></div>
                    <div class="description">${result.description}</div>
                </div>`;   
    });

    resultsDiv.innerHTML = html;
}