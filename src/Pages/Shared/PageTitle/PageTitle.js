import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ pageName }) => {
  return (
    <div>
      <Helmet>
        <title>{pageName}-Genius-car-services-1</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
