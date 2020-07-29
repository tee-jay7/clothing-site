import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function Details({ productDetail }) {
  const { img, title, price, info, company } = productDetail;
  return (
    <div className="container">
      <div className="row">
        <Title name="Product" title="Details" />
      </div>
      {/* Title */}
      <div className="row">
        <div className="col10 center-align text-blue">
          <h3>{title}</h3>
        </div>
      </div>
      {/* product info */}
      <div className="row">
        <div className="col s10 m6">
          <img src={img} alt="dress" className="responsive-img" />
        </div>
        <div className="col s10 m6 center-align">
          <h5>Name: {title}</h5>
          <h5 className="text-title title">Made by: {company}</h5>
          <h4 className="text-blue">
            <strong>
              price: <span>Ghs </span>
              {price}
            </strong>
          </h4>
          <div className="title">
            <h5> detail info</h5>
          </div>
          <p className="text-flow">{info}</p>
          <p>
            <Link to="/store">
              <button
                className="btn green waves-effect waves-light"
                type="button"
              >
                our shop
                <i className="material-icons right">store</i>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
