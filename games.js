const gamesDiv = document.querySelector(".games")

function reqListener(response) {
    const data = JSON.parse(this.responseText)
    for (const game of data) {
        gamesDiv.innerHTML += `
        <a class="d-block text-light link-light text-decoration-none col py-3">
            <article class="card shadow-sm  bg-secondary text-light border">
                <img class="card-img-top" src="${game.img}" alt="Obrázek ${game.name}">
                <div class="card-body">
                    <h3 class="card-text fs-3 fw-bold">${game.name}</h3>
                    <p class="card-text">${game.description}</p>
                    <a href="${game.url}"><button class="btn btn-primary">Otevřít</button></a>
                </div>
            </article>
        </a>`
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "./games.json");
req.send();