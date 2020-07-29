import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import notfound from "../notfound.svg";

function Default() {
  return (
    <div className="container">
      <div className="row">
        <Title name="page not" title="found" />
      </div>
      <div className="row">
        <Link to="/">
          <h4 className="title">Head back home</h4>
        </Link>

        <img src={notfound} alt="page not foun" />
      </div>
    </div>
  );
}

export default Default;
