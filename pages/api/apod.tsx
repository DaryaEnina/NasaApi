import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = req.query.date as string;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

  const apiUrl = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  res.status(200).json(data);
}
