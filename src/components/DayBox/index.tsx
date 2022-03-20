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
    <div>
      <div>
        <div>
          {isDaytime ? (
            <span role="img" aria-label="Full Moon Face">
              🌝
            </span>
          ) : (
            <span role="img" aria-label="New Moon Face">
              🌚
            </span>
          )}
          <div>
            <div>{name}</div>
            <div>{new Date(startTime).toDateString()}</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span>{temperature}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2v4zm-7.5-2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </div>
        <div>
          <span>
            {windSpeed} {windDirection}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z" />
          </svg>
        </div>
      </div>

      <div>{shortForecast}</div>
      {/* TODO: see more details */}
      {/* <div>{detailedForecast}</div> */}
    </div>
  );
};

export default DayBox;
