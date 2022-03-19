import { useState } from "react";
import type { NextPage } from "next";

import { getCoordinates } from "../src/services/getForecast";

type Coordinates = {
  latitude?: number;
  longitude?: number;
};

const Home: NextPage = () => {
  const [address, setAddress] = useState(
    "4600 Silver Hill Rd, Washington, DC 20233"
  );
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleClick = async () => {
    if (!address) return;
    setIsLoading(true);

    const coordinatesResult = await getCoordinates(address);
    setCoordinates(coordinatesResult);

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Weather US National</h1>
      <input type="text" onChange={handleAddress} value={address} />
      <button onClick={handleClick} disabled={!address || isLoading}>
        Get forecast
      </button>

      {/* Using && but it could be a ternary when needed (avoid render 0 in some cases) */}
      {coordinates.latitude && coordinates.longitude && (
        <>
          <p>Latitude (x): {coordinates.latitude}</p>
          <p>Longitude (y): {coordinates.longitude}</p>
        </>
      )}
    </div>
  );
};

export default Home;
