import React, { useState } from "react";
import CategoriesList from "../CategoriesList";
import CreateCategory from "../CreateCategory";

function App() {
  const [categories, setCategories] = useState({
    1: {
      name: "Category 1",
      id: 1,
    },
    2: {
      name: "Category 2",
      id: 2,
      children: {
        2222: {
          id: 2222,
          name: "Category 2.1",
        },
      },
    },
  });

  const onSubmitNewCategory = (newCategory) => {
    setCategories({ ...categories, [newCategory.id]: newCategory });
  };

  console.log(categories);

  const onDrag = (category, to) => {
    const copy = { ...categories };
    copy[to.id].children = { ...copy[to.id].children, [category.id]: category };
    delete copy[category.id];
    setCategories(copy);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container  mx-auto p-4">
        <div className="bg-white   rounded-md shadow-md">
          <div className="flex">
            <div className="p-5 w-1/3 border-r">
              <CategoriesList
                onDragItem={onDrag}
                categories={Object.values(categories)}
              />
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
