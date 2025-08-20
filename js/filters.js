const categoryFilter = document.getElementById("categoryFilter");
const yearFilter = document.getElementById("yearFilter");
const styleFilter = document.getElementById("styleFilter");

async function applyFilters() {
  let filtered = moviesCache;

  // fetch detailed info for all cached movies
  const detailedMovies = await Promise.all(filtered.map(m => fetchMovieDetails(m.imdbID)));

  if (categoryFilter.value !== "all") {
    filtered = detailedMovies.filter(m => m.Genre.includes(categoryFilter.value));
  } else {
    filtered = detailedMovies;
  }

  if (yearFilter.value !== "all") {
    filtered = filtered.filter(m => {
      const year = parseInt(m.Year);
      if (yearFilter.value === "2020s") return year >= 2020;
      if (yearFilter.value === "2010s") return year >= 2010 && year < 2020;
      if (yearFilter.value === "2000s") return year >= 2000 && year < 2010;
      return true;
    });
  }

  if (styleFilter.value !== "all") {
    filtered = filtered.filter(m => m.Genre.includes(styleFilter.value));
  }

  displayMovies(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
styleFilter.addEventListener("change", applyFilters);
