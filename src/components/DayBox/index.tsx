import Card from "./Card";
import Box from "../Box";
import Text from "../Text";

type Day = {
  name: string;
  isDaytime: boolean;
  startTime: string;
  shortForecast: string;
  detailedForecast: string;
  temperature: string;
  windSpeed: string;
  windDirection: string;
};

const DayBox = ({
  name,
  isDaytime,
  startTime,
  shortForecast,
  // detailedForecast,
  temperature,
  windSpeed,
  windDirection,
}: Day) => {
  return (
    <Card>
      <div>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            marginBottom: "-$4",
          }}
        >
          {isDaytime ? (
            <Text
              type="icon"
              role="img"
              aria-label="Sun representing the morning"
            >
              🌤️
            </Text>
          ) : (
            <Text
              type="icon"
              role="img"
              aria-label="Moon representing the night"
            >
              🌘
            </Text>
          )}
          <Box css={{ marginLeft: "$2" }}>
            <Text as="div" type="name">
              {name}
            </Text>
            <Text type="day">{new Date(startTime).toDateString()}</Text>
          </Box>
        </Box>
      </div>

      <Box css={{ display: "flex", alignItems: "center" }}>
        <Text type="temperature" css={{ marginRight: "$3" }}>
          {temperature}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2v4zm-7.5-2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </Text>
        <Box
          css={{
            height: "22px",
            width: "2px",
            backgroundColor: "$backgroundLight2",
            margin: "0 $4 0 $2",
          }}
        />
        <Text type="wind">
          {windSpeed} {windDirection}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z" />
          </svg>
        </Text>
      </Box>

      <Text type="shortForecast">{shortForecast}</Text>
      {/* TODO: see more details */}
      {/* <div>{detailedForecast}</div> */}
    </Card>
  );
};

export default DayBox;
