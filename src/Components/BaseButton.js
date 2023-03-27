import React from "react";

const variants = ["hero-btn-1", "hero-btn-2"];

function BaseButton({
  as = "button",
  children,
  className,
  style,
  variant = 0,
  fontSize = "fs-18px",
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={`${variants[variant]} ${fontSize} ${className}`}
      style={{
        display: "inline-block",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default BaseButton;
