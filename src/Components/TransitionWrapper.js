import useDelayUnmount from "hooks/useDelayUnmount";
import React from "react";
import Portal from "./Portal";
import styles from "CSS/TransitionWrapper.module.css";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function TransitionWrapper({ children, className, open, setOpen }) {
  const shouldRender = useDelayUnmount(open, 300);
  const modalRef = OutsideClickDetector(() => setOpen && setOpen(false));

  return (
    <>
      {shouldRender && (
        <Portal>
          <div
            ref={modalRef}
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
