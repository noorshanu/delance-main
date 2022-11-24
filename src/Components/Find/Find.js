import React from "react";
import "./Find.css";

function Find() {
  return (
    <section className="find">
      <div className="header-img">
        <img
          src="https://ik.imagekit.io/cforcrypto/Dework/freelance_in_metaverse.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669269508496"
          alt=""
        />
      </div>
      <div className="bg-dework">
        <div className="container">
          <div className="d-work-box">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="de-work-btn-box">
            <h1>START NOW</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Find;
