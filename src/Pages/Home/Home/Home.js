import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle pageName={`Home`}></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
