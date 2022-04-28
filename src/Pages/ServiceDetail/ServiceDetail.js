import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  // Getting indivisal service:

  const [service, setService] = useState({});

  fetch(`https://peaceful-cove-33691.herokuapp.com/service/${serviceId}`)
    .then((res) => res.json())
    .then((data) => {
      setService(data);
    });

  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2 className="text-center mt-4">
        You are about to book: {service.name}
      </h2>
      <button
        onClick={() => navigate(`/checkout/${serviceId}`)}
        className="border-0 p-1 mt-2 rounded-2"
      >
        Proceed CheckOut
      </button>
    </div>
  );
};

export default ServiceDetail;
