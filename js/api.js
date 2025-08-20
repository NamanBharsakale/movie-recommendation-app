async function fetchMovies(query) {
  const response = await fetch(`/api/movies?q=${query}`);
  const data = await response.json();
  return data.Search || [];
}

async function fetchMovieDetails(imdbID) {
  const response = await fetch(`/api/movieDetails?id=${imdbID}`);
  return await response.json();
}
