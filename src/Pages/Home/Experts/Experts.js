import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Messy Vau", img: expert2 },
  { id: 3, name: "Ronaldo Bro", img: expert3 },
  { id: 4, name: "Dounyl Rock", img: expert4 },
  { id: 5, name: "Sakib Kodu", img: expert5 },
  { id: 6, name: "Bijoy Mohin", img: expert6 },
];

const Experts = () => {
  return (
    <div id="experts">
      <h1 className="text-center text-secondary">Our Experts</h1>
      <div className="row g-4 container mx-auto mt-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
