import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import axios from "axios";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [serviceDetail, setServiceDetail] = useServiceDetail(serviceId);

  const [user, loading, error] = useAuthState(auth);

  //   const [user, setUser] = useState({
  //     name: "Akbar The Create",
  //     email: "akbar@momo.taj",
  //     address: "Tajmohol Road Md.pur",
  //     phone: "017111111111",
  //   });

  //   const handleAddressUpdate = (e) => {
  //     const { address, ...rest } = user;
  //     const newAddress = e.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     setUser(newUser);
  //   };

  const handlePlaceHolder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: serviceDetail.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://peaceful-cove-33691.herokuapp.com/order", order)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          toast("Your Order is BOOKED");
          event.target.reset();
        }
      });
  };

  console.log(user);

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center">Please Order: {serviceDetail.name}</h1>
      <form onSubmit={handlePlaceHolder} className="text-center mt-4" action="">
        <input
          readOnly
          disabled
          value={user?.displayName}
          className="w-50 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          id=""
        />
        <br />
        <input
          readOnly
          disabled
          value={user?.email}
          className="w-50 mb-2"
          type="text"
          name="email"
          placeholder="Email"
          id=""
        />
        <br />
        <input
          readOnly
          disabled
          className="w-50 mb-2"
          type="text"
          value={serviceDetail.name}
          name="service"
          placeholder="Service"
          id=""
        />
        <br />
        <input
          autoComplete="off"
          className="w-50 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          id=""
        />
        <br />
        <input
          className="w-50 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          id=""
        />
        <br />
        <input
          className="btn-secondary w-50 mb-2"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
