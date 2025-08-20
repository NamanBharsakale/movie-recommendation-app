async function fetchMovies(query) {
  const response = await fetch(`/api/movies?q=${query}`);
  return (await response.json()).Search || [];
}

async function fetchMovieDetails(imdbID) {
  const response = await fetch(`/api/movieDetails?id=${imdbID}`);
  return await response.json();
}

