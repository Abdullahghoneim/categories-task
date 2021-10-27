import React from "react";
import { useDrag, useDrop } from "react-dnd";
import Children from "./children";

function Category({ category, onDragItem }) {
  const [, dragRef] = useDrag({
    type: "pet",
    item: category,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "pet",
    drop: (item) => {
      onDragItem(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef}>
      <li
        ref={dragRef}
        className="p-3 cursor-move select-none list-item border-2 mt-3 rounded-sm"
      >
        <i class="fas fa-bars text-gray-100 pr-3"></i> {category.name}
      </li>
      {category.children && (
        <Children onDraging={(item) => onDragItem(item)} category={category} />
      )}
    </div>
  );
}

export default Category;
