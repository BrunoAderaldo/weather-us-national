import { useState } from "react";
import type { NextPage } from "next";

import { getForecast } from "../src/services/getForecast";
import DayBox from "../src/components/DayBox";
import Container from "../src/components/Container";
import Text from "../src/components/Text";
import Button from "../src/components/Button";
import Search from "../src/components/Search";

type JSONresponse = {
  status?: number;
  title?: string;
  detail?: string;
};

type Forecast = {
  status?: number;
  periods?: [];
};

const FIXED_ADDRESS = "701 BRAZOS ST, AUSTIN, TX";

const Home: NextPage = () => {
  const [address, setAddress] = useState(
    "4600 Silver Hill Rd, Washington, DC 20233"
  );
  const [error, setError] = useState<JSONresponse>({});
  const [forecast, setForecast] = useState<Forecast>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleClick = async () => {
    if (!address) return;
    setIsLoading(true);

    const response: JSONresponse | Forecast =
      (await getForecast(address)) || {};

    if (response.status !== 200) {
      setError(response);
    }

    setForecast(response);

    setIsLoading(false);
  };

  const handleAddressTest = () => {
    setAddress(FIXED_ADDRESS);
    handleClick();
  };

  return (
    <Container>
      <Text as="h1">How's the weather today?</Text>

      <label htmlFor="search">Enter an address</label>
      <div>
        <Search>
          <input
            type="text"
            id="search"
            onChange={handleAddress}
            value={address}
            placeholder="number street city state"
          />
          <Button onClick={handleClick} disabled={!address || isLoading}>
            {/* TODO: import as icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
          </Button>
        </Search>

        {error && (
          <>
            <span>{error.title}</span>
            <span>{error.detail}</span>
          </>
        )}

        <div>
          Try
          <Button
            inline
            onClick={handleAddressTest}
            disabled={!address || isLoading}
          >
            {FIXED_ADDRESS}
          </Button>
        </div>
      </div>

      <div>
        {forecast.periods?.map((item, i) => (
          <DayBox key={i} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
