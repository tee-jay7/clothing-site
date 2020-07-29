import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col s10 center-align text-title">
        <h1 className="title">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;
