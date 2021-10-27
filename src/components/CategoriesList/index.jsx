import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Category from "./Category";

function CategoriesList({ categories, onDragItem }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className="font-bold text-base"> Categories </h1>
        <p className="text-gray-500 font-medium text-sm">
          Darag and drop items to sort
        </p>
        <div className="mt-5">
          {categories.length === 0 ? (
            <div className=" pt-20">
              <p className="text-center ">
                you dont have any categories now , you can by fill the form in
                right side
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <ul key={category.id}>
                <Category
                  onDragItem={(item) => {
                    onDragItem(item, category);
                  }}
                  category={category}
                />
              </ul>
            ))
          )}
        </div>
      </div>
    </DndProvider>
  );
}

export default CategoriesList;
