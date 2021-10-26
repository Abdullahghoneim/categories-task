import React, { useState } from "react";
import CategoriesList from "../CategoriesList";
import CreateCategory from "../CreateCategory";

function App() {
  const [categories, setCategories] = useState([]);

  const onSubmitNewCategory = (newCategory) => {
    setCategories((cuurent) => [...cuurent, newCategory]);
  };

  console.log(categories);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container  mx-auto p-4">
        <div className="bg-white   rounded-md shadow-md">
          <div className="flex">
            <div className="p-5 w-1/3 border-r">
              <CategoriesList categories={categories} />
            </div>
            <div className="flex-1">
              <CreateCategory onSubmitNewCategory={onSubmitNewCategory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
