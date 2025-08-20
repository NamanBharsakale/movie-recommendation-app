const API_KEY = "7ae0813f"; // replace with your OMDb key

async function fetchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
}

async function fetchMovieDetails(imdbID) {
  const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
  const data = await response.json();
  return data; // contains Genre, Year, Plot, etc.
}
