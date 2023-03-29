import React from "react";
import BaseButton from "./BaseButton";

function LoadingButton({ children, loading = false, ...props }) {
  return (
    <BaseButton {...props}>
      {!loading ? children : <div className="loadingbutton-loader"></div>}
    </BaseButton>
  );
}

export default LoadingButton;
