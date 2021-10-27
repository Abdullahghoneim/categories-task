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
            <div>
              <ul>
                <li className="p-3 list-item shadow-md mt-3 rounded-sm">
                  {category.name}
                </li>
                {category.children && (
                  <ul className="pl-5">
                    {category.children.map((child) => (
                      <li className="p-3 list-item shadow-md mt-3 rounded-sm">
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoriesList;
