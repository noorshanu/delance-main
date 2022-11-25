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
              Dework” is a project that creates unique contents on Metaverse
              technology that is a huge trend around the world. Its aim is to
              move people to another dimension within the digital universe.
             
            </p>

            <p>
            Metaverse - where buyers can interact with freelancers in the
              office space and have a discussion through voice or video
              conference call in the meeting room.
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
