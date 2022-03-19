import { useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [address, setAddress] = useState("");

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const getForecast = () => {};

  return (
    <div>
      <h1>Weather US National</h1>
      <input type="text" onChange={handleAddress} value={address} />
      <button onClick={getForecast}>Get forecast</button>
    </div>
  );
};

export default Home;
