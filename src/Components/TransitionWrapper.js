import useDelayUnmount from "hooks/useDelayUnmount";
import React from "react";
import Portal from "./Portal";
import styles from "CSS/TransitionWrapper.module.css";

function TransitionWrapper({ children, className, open }) {
  const shouldRender = useDelayUnmount(open, 300);

  return (
    <>
      {shouldRender && (
        <Portal>
          <div
            style={{ zIndex: 100000000 }}
            className={`${styles.popup} ${className} ${
              open ? styles.mount : styles.unmount
            }`}
          >
            {children}
          </div>
        </Portal>
      )}

      <Portal>
        <div
          className={`black-screen ${open && "show"}`}
          style={{ zIndex: 100000 }}
        ></div>
      </Portal>
    </>
  );
}

export default TransitionWrapper;
