import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);
  };

  return (
    <div className="p-24 ">
      <div className="text-center p-12 space-y-2 bg-[#F4F3F0]">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          Fill out the form below to add a new coffee item to your store.
          Include details like name, origin, taste, <br /> and category to keep
          your coffee collection updated.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="Quantity"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-[#D2B48C]"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
