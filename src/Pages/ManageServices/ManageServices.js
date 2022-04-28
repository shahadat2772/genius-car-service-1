import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Sure?");
    if (proceed) {
      console.log(id);
      fetch(`https://peaceful-cove-33691.herokuapp.com/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            const restServices = services.filter(
              (service) => service._id !== id
            );
            setServices(restServices);
          }
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Manage Services {services.length}</h2>
      {services.map((service) => (
        <div>
          <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
