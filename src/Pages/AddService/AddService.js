import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://peaceful-cove-33691.herokuapp.com/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>ADD A SERVICE</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-1"
          placeholder="Name"
          type="text"
          {...register("name")}
        />
        <textarea
          {...register("description")}
          className="mb-1"
          placeholder="Description"
          type="text"
        />
        <input
          {...register("price")}
          className="mb-1"
          placeholder="Price"
          type="number"
        />
        <input
          {...register("img")}
          className="mb-1"
          placeholder="Photo URL"
          type="text"
        />
        <input type="submit" value={"Add User"} />
      </form>
    </div>
  );
};

export default AddService;
