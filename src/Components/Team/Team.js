import React from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="team-head">
          <h1>TEAM</h1>
          <div className="team-sub">
            <p>
              DeeLancer team is composed of people that worked as freelancers
              ,understand the frustrations and pain points people face web2
              Problems . We're here to help break the ice by connecting a wide
              range of people and skill sets in web3 Space and bring ownership
              to all .
            </p>
          </div>
        </div>

        <div className="team-grid ">
          <div className="team-box">
            <div className="linked">
              <FaLinkedin />{" "}
            </div>
            <div className="text-center box-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Team/aiimg__5__1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670013257858"
                alt=""
              />
              <h2>DOMMETI</h2>
              <p>Founder / CEO</p>
            </div>
            <div className="team_details">
              <p>
                Having been in market since two decades and his experience is
                from the tech, Engineering and investment side. Demonstrated
                ability to identify emerging global trends and then
                create/execute vision to build/rationalize investment businesses
                across various asset classes and geographical markets. web3 is
                his vision, and he is responsible for developing and building a
                specialist team to make web3 Platform the home of freelancers.
              </p>
            </div>
          </div>

          <div className="team-box">
            <div className="linked">
              <FaLinkedin />{" "}
            </div>
            <div className="text-center box-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Team/aiimg__5__1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670013257858"
                alt=""
              />
              <h2>DOMMETI</h2>
              <p>Founder / CEO</p>
            </div>
            <div className="team_details">
              <p>
                Having been in market since two decades and his experience is
                from the tech, Engineering and investment side. Demonstrated
                ability to identify emerging global trends and then
                create/execute vision to build/rationalize investment businesses
                across various asset classes and geographical markets. web3 is
                his vision, and he is responsible for developing and building a
                specialist team to make web3 Platform the home of freelancers.
              </p>
            </div>
          </div>

          <div className="team-box">
            <div className="linked">
              <FaLinkedin />{" "}
            </div>
            <div className="text-center box-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Team/aiimg__5__1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670013257858"
                alt=""
              />
              <h2>DOMMETI</h2>
              <p>Founder / CEO</p>
            </div>
            <div className="team_details">
              <p>
                Having been in market since two decades and his experience is
                from the tech, Engineering and investment side. Demonstrated
                ability to identify emerging global trends and then
                create/execute vision to build/rationalize investment businesses
                across various asset classes and geographical markets. web3 is
                his vision, and he is responsible for developing and building a
                specialist team to make web3 Platform the home of freelancers.
              </p>
            </div>
          </div>

          {/* 2rd */}

          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>

          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>

          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>
          {/* 3rd */}
          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>
          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>
          <div className="team-box">
            <div className="text-center box-img">
              <p>hi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
