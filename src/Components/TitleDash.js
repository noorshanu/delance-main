import React from "react";

function TitleDash({ title, className }) {
  return (
    <div className={`${className}`}>
      <h1 className="green-light weight-700 fs-40px">{title}</h1>
      <div className="line-g">
        <img src="images/dash.svg" alt="" />
      </div>
    </div>
  );
}

export default TitleDash;
