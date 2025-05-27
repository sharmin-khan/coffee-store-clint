import React from "react";


const CoffeeCard = ({ coffee }) => {
  const { photo, name, price, quantity } = coffee;
  return (
    <div>
      <div className="card card-side bg-[#F4F3F0] shadow-sm">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="w-full flex justify-around items-center text-[#374151]">
          <div className="space-y-3">
            <p><span className="font-semibold">Name: </span>{name}</p>
            <p><span className="font-semibold">Price: </span>{price}</p>
            <p><span className="font-semibold">Quantity: </span>{quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical gap-2">
              <button className="btn join-item">View</button>
              <button className="btn join-item">Edit</button>
              <button className="btn join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
