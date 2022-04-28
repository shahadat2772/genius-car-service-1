import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { get } from "react-hook-form";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // fetch("https://peaceful-cove-33691.herokuapp.com/order")
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data));

    // OR

    const getOrders = async () => {
      const email = user?.email;
      const url = `https://peaceful-cove-33691.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, []);

  return (
    <div className="mx-auto w-50">
      <h2>Your ORDERS {orders.length}</h2>
      {orders.map((order) => (
        <div>
          <p>
            {order.service}::{order.email}
            {/* {console.log(order)} */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
