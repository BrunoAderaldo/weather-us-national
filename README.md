# Weather US National App

Connects to public geocoding and weather REST APIs providing a specified address for display the 7-day forecast.

## US Census Geocoding API

Converts addresses into latitude and longitude:
https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf

## US National Weather Service API:
Converts the coordinates to forecast data
https://www.weather.gov/documentation/services-web-api

_Note: sometimes their API returns error._

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Stitches](https://stitches.dev/)
- **Icons**: [Remix Icon](http://remixicon.com/)

## Design with Figma

![image](https://user-images.githubusercontent.com/14007590/159200158-422b1557-f237-4c01-a603-c8ead299b057.png)

## TODO:

- [ ] See values in different units (Celsius, Km/h);
- [ ] Save favorite locations;
- [ ] Show detailed forecast text;
- [ ] Show hourly forecast;
- [ ] Change to OpenWeather API;

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
