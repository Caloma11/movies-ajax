const moviesContainer = document.getElementById('movies');

const fetchMovies = (query) => {

  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      const movies = data["Search"];

      movies.forEach((movie) => {

       const movieString = `<div class="movie">
          <img src="${movie.Poster}">
          <h2>${movie.Title}</h2>
        </div>`

        moviesContainer.insertAdjacentHTML('beforeend', movieString);

      })
    });

}


const input = document.querySelector("#keyword");
const form = document.querySelector("#search-movies");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value;
  if (query.length > 3) {

  moviesContainer.innerHTML = "";
  fetchMovies(query);
  input.value = "";
  }
})


// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data); // Look at local_names.default
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);
