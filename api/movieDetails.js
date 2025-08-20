export default async function handler(req, res) {
  const imdbID = req.query.id;
  const API_KEY = process.env.OMDB_API_KEY;

  if (!imdbID) return res.status(400).json({ error: "Movie ID missing" });

  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
