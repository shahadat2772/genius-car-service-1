import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle pageName={`About`}></PageTitle>
      <h3>This si about</h3>
    </div>
  );
};

export default About;
