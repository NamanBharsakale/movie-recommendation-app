const movieList = document.getElementById("movieList");
const searchBar = document.getElementById("searchBar");

let moviesCache = []; // cache detailed movies for filtering

async function displayMovies(moviesToShow) {
  movieList.innerHTML = "";
  if (moviesToShow.length === 0) {
    movieList.innerHTML = "<p>No movies found.</p>";
    return;
  }

  for (const movie of moviesToShow) {
    const details = await fetchMovieDetails(movie.imdbID);
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${details.Poster !== "N/A" ? details.Poster : "assets/images/placeholder.png"}" alt="${details.Title}">
      <h3>${details.Title}</h3>
      <p>${details.Year} • ${details.Genre}</p>
    `;
    movieList.appendChild(card);
  }
}

searchBar.addEventListener("input", async () => {
  const query = searchBar.value.trim();
  if (query.length < 3) {
    movieList.innerHTML = "";
    return;
  }

  const movies = await fetchMovies(query);
  moviesCache = movies; // store search results for filters
  displayMovies(movies);
});
