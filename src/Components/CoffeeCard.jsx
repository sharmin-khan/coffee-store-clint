import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, price, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //delete korlam naki cancle korlam dekhar jonno console kore dekhlam
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#F4F3F0] shadow-sm">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="w-full flex justify-around items-center text-[#374151]">
          <div className="space-y-3">
            <p>
              <span className="font-semibold">Name: </span>
              {name}
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              {price}
            </p>
            <p>
              <span className="font-semibold">Quantity: </span>
              {quantity}
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical gap-2">
              <button className="btn join-item">View</button>
              <button className="btn join-item">Edit</button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
