import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import backgroundImage from "../assets/images/more/1.png";

const OurProduct = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div
      className="p-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center p-12 space-y-4 text-[#374151]">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-4xl playfair font-semibold ">
          Our Popular Products
        </h1>
        <button className="btn bg-[#E3B577] text-white playfair font-normal">
          AddCoffee
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
