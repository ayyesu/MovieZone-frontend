const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

const div_movie = document.querySelector(".display-movie");
const search = document.querySelector(".searchbar");
const section = document.getElementById("movie-card");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");

returnMovies(APILINK);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const moviebox = document.createElement("div");
        moviebox.setAttribute("class", "movie-box");

        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");

        const div_displaymovie = document.createElement("div");
        div_displaymovie.setAttribute("class", "display-movie");

        const movieImage = document.createElement("img");
        const title = document.createElement("h3");

        moviebox.appendChild(div_card);
        div_card.appendChild(div_displaymovie);
        div_displaymovie.appendChild(movieImage);
        div_card.appendChild(title);
        section.appendChild(moviebox);

        title.innerText = `${element.title}`;
        movieImage.src = IMG_PATH + element.poster_path;
      });
    });
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    section.innerHTML = "";
    
    const searchItem = search.value;

    if (searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    } else {
        returnMovies(APILINK);
    }
    
}, true);
