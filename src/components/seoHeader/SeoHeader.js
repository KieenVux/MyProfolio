import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
}

export default SeoHeader;
