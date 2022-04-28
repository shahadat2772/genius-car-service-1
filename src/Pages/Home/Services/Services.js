import React, { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div id="services">
      <h1 className="serviceHeader">Our Services</h1>
      <div className="container services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
