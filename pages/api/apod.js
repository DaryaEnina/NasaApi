export default async function handler(req, res) {
  const date = req.query.date;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  res.status(200).json(data);
}
