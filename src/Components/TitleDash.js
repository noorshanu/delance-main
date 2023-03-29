import React from "react";
import Dash from "assets/dash.svg";

function TitleDash({
  title,
  className,
  fontSize = "fs-40px",
  color = "green-light",
  textClassName,
}) {
  return (
    <div className={`${className}`}>
      <h1 className={`${color} weight-700 ${fontSize} ${textClassName}`}>
        {title}
      </h1>
      <img src={Dash} alt="" style={{ width: "auto" }} />
    </div>
  );
}

export default TitleDash;
