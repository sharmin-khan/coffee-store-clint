import React from "react";
import backgroundImage from "../assets/images/more/1.png";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    //send coffeeData to the Database
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After adding coffee to DB" ,data);
        if (data.insertedId) {
          console.log("Added successfully.");

          //sweet alert
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });

          form.reset();
        }
      });
  };

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
    <h1 className="text-[#374151] playfair font-semibold mb-12">← Back to Home</h1>
      <div className="text-center text-[#374151] p-12 space-y-4 bg-[#F4F3F0] rounded-lg">
        <h1 className="text-4xl playfair font-semibold">
          Add New Coffee
        </h1>
        <p className="mb-8">
          Fill out the form below to add a new coffee item to your store.
          Include details like name, origin, taste, <br /> and category to keep
          your coffee collection updated.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="Quantity"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Price per Cup"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
            <label className="label font-bold">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] text-[#374151] font-bold"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
