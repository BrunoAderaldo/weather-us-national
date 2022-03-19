/**
 * Call an internal serverless function (avoid CORS error) to get the coordinates.
 * @param {String} address e.g: 4600 Silver Hill Rd, Washington, DC 20233
 * @returns {Object} e.g: { latitude: -76.92744, longitude: 38.845985 }
 */
export const getCoordinates = async (address: string) => {
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
 * TODO:
 * get forecast - https://api.weather.gov/points/{latitude},{longitude}
 */

export const getForecast = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
