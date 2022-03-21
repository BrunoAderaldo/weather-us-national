import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../stitches.config";

const meta = {
  title: `Weather US App`,
  description: `Connects to public geocoding and weather REST APIs providing a specified address for display the 7-day forecast.`,
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content={meta.description} name="description" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
