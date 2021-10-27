import React from "react";

function CategoriesList({ categories }) {
  return (
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
            <ul key={category.name}>
              <li className="p-3 cursor-move select-none list-item border-2 mt-3 rounded-sm">
                <i class="fas fa-bars text-gray-100 pr-3"></i> {category.name}
              </li>
              {category.children && (
                <ul className="pl-5">
                  {category.children.map((child) => (
                    <li
                      key={child.name}
                      className="p-3  select-none cursor-move list-item border-2 mt-3 rounded-sm"
                    >
                      <i class="fas fa-bars text-gray-100 pr-3"></i>{" "}
                      {child.name}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoriesList;
