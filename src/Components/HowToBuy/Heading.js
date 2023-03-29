import React from "react";

const Heading = ({ children, className }) => {
  return (
    <h1 className={`text-center fs-28px weight-700 white ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
