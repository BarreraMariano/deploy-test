import React from "react";
import { useItemResults } from "hooks/item-result-hooks";

function ItemResult() {
  const item = useItemResults();
  console.log(item);

  return (
    <div>
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <h4>{item.price}</h4>
    </div>
  );
}

export { ItemResult };
