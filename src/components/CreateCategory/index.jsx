import React, { useState } from "react";

function CreateCategory({ onSubmitNewCategory }) {
  const [name, setname] = useState("");
  const [url, setUrl] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const ob = {
      name,
      url,
    };
    setname("");
    setUrl("");
    onSubmitNewCategory(ob);
    console.log(ob);
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="p-5 border-b-2 pb-3">
        <div className="border-b pb-5">
          <h1 className="font-bold text-base"> Add Sub category </h1>
          <p className="text-gray-500 font-medium text-sm">
            Please fill all informations
          </p>
        </div>
        <div className="mt-7 border p-5">
          <label htmlFor="" className="font-medium block text-sm">
            Category Name
          </label>
          <input
            type="text"
            required
            onChange={(e) => setname(e.target.value)}
            name="name"
            value={name}
            className="outline-none transition-all bg-gray-50 rounded-sm pl-3 border p-1 w-2/4 mt-2"
          />
        </div>
        <div className="URL pb-4 mt-7">
          <label htmlFor="" className="font-medium block text-sm">
            URL
          </label>
          <div className="flex mt-2">
            <button
              style={{ outline: "2px solid #eeee" }}
              className="outline p-2 mt-3 text-sm"
            >
              https://site.com/store
            </button>
            <input
              type="url"
              required
              onChange={(e) => setUrl(e.target.value)}
              name="url"
              value={url}
              className="outline-none -ml-0.5 border   transition-all bg-gray-50 rounded-sm pl-3   w-2/4 mt-2"
            />
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-between">
        <div>
          <p className="text-sm">Your changes are saved</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-custom-green w-28 py-1 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateCategory;
