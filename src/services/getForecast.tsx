const US_NWS_URL = "https://api.weather.gov/points";

/**
 * Call an internal serverless function (avoid CORS error) to get the coordinates.
 * @param {String} address e.g: 4600 Silver Hill Rd, Washington, DC 20233
 * @returns {Object} e.g: { latitude: -76.92744, longitude: 38.845985 }
 */
const getCoordinates = async (address: string) => {
  const config = {
    method: "POST",
    body: JSON.stringify({ address }),
  };

  try {
    const data = await fetch("/api/get-coordinates", config)
      .then((res) => res.json())
      .then((data) => data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get forecast and periods.
 * https://api.weather.gov/points/{latitude},{longitude}
 * @param {String} address e.g: 4600 Silver Hill Rd, Washington, DC 20233
 * @returns {Array} with periods
 */
export const getForecast = async (address: string) => {
  try {
    const { latitude, longitude } = await getCoordinates(address);

    // TODO: remove test data
    const testLatitude = "39.7456";
    const testLongitude = "-97.0892";
    const url = `${US_NWS_URL}/${testLatitude},${testLongitude}`;

    const response = await fetch(url).then((res) => res.json());

    if (response.status === 404) {
      return {
        status: 404,
        title: response.title,
        detail: response.detail,
      };
    }

    const forecast = response.properties.forecast;

    if (!forecast)
      return {
        status: 404,
        title: "No forecast title",
        detail: "Mo forecast detail",
      };

    const data = await fetch(forecast).then((res) => res.json());

    return {
      status: 200,
      periods: data.properties?.periods,
    };
  } catch (error) {
    console.log(error);
  }
};
