import fetch from 'node-fetch';

export default async function handler(req, res) {
  const query = req.query.q;
  const API_KEY = process.env.OMDB_API_KEY; // stored securely in environment variables

  if (!query) {
    return res.status(400).json({ error: "Query missing" });
  }

  const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
