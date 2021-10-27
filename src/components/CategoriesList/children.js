import React from "react";
import { useDrop } from "react-dnd";

function Children({ category, onDraging }) {
  const [, dropRef] = useDrop({
    accept: "pet",
    drop: (item) => {
      onDraging(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <ul className="pl-5" ref={dropRef}>
      {Object.values(category.children).map((child) => (
        <li
          key={child.id}
          className="p-3  select-none cursor-move list-item border-2 mt-3 rounded-sm"
        >
          <i class="fas fa-bars text-gray-100 pr-3"></i> {child.name}
        </li>
      ))}
    </ul>
  );
}

export default Children;
