import React from "react";
import backgroundImage from "../assets/images/more/1.png";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const {name,quantity,price,taste,supplier,details,photo} = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const formData= new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries())
    console.log(updateCoffee);
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
      <h1 className="text-[#374151] playfair font-semibold mb-12">
        ← Back to Home
      </h1>
      <div className="text-center text-[#374151] p-12 space-y-4 bg-[#F4F3F0] rounded-lg">
        <h1 className="text-4xl playfair font-semibold">
          Update Existing Coffee Details
        </h1>
        <p className="mb-8">
          Use the form below to update the details of your selected coffee.
          Adjust fields such as name, quantity, price, <br /> supplier, taste,
          category, and photo URL to keep your <br />coffee collection accurate and
          up-to-date.
        </p>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Quantity"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                 defaultValue={taste}
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                name="price"
                  defaultValue={price}
                className="input w-full"
                placeholder="Price per Cup"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
                 defaultValue={details}
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
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] text-[#374151] font-bold"
            value="Update Coffee Details"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
