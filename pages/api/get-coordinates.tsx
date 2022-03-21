import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json";

type Response = {
  msg?: string;
  longitude?: number;
  latitude?: number;
  error?: Error;
};

/**
 * Get coordinates using https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf
 */
export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const address = JSON.parse(req.body).address;

  // Log for Vercel functions
  console.log(`----- ${address} -----`);

  if (!address) {
    return res.status(400).json({ msg: "Missing address" });
  }

  const url = `${BASE_URL}&address=${address}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const result = data.result.addressMatches;

    if (!result.length) {
      return res.status(200).json({ msg: "No address matches" });
    }

    const { x, y } = result[0].coordinates;

    res.status(200).json({
      longitude: x,
      latitude: y,
    });
  } catch (error) {
    res.status(500).json({ error: error as Error });
  }
};
