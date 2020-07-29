import React from "react";
import Title from "./Title";
import Item from "./Item";

function ItemList({ products, setDetail }) {
  return (
    <div className="container">
      <Title name="our" title="shop" />

      <div className="row">
        {products.map((item) => (
          <Item key={item.id} item={item} setDetail={setDetail} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
