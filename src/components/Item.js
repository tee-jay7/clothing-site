import React from "react";
import { Link } from "react-router-dom";

function Item({ item, setDetail }) {
  const { id, img, price, title } = item;
  return (
    <div>
      <div className="col s12 m6 l4">
        <div className="card large">
          <div className="card-image">
            <img src={img} alt="dress" className="responsive-img" />
          </div>

          <div className="card-content">
            <span className=" card-title">{title}</span>

            <span className=" card-title title text-blue">
              {" "}
              Price: Ghs {price}
            </span>
          </div>
          <div className="card-action" onClick={() => setDetail(id)}>
            <Link to="/details">View product detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
