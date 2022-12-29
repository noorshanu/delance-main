import React from "react";
import MobWhyus from "./MobWhyus";

import "./Why.css";

function WhyUs() {
  return (
    <section className="why-us">
      <MobWhyus />
      <div className="container desktop-box-why">
        <div className="why-us-head text-center">
          <h1>Why Deelance</h1>
        </div>

        <div className="why-us-box ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
                      alt=""
                    />
                  </div>
                </th>
                <th scope="col">
                <div className="content-2">
                    <img
                      src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
                      alt=""
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
