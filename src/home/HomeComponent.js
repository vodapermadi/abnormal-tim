import React from "react";
import voda from "../portofolio/vodapermadi.jpeg";
import sabrina from "../portofolio/sabrinautami.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeComponent = () => {

  AOS.init();

  return (
    <div>
      <div className="flex container text-center mb-5 text-white bgHome">
        <div className="row">
          <div className="col">
            <h1>Abnormal</h1>
            <h5>Hello!! 🙌 select one of the profiles below to see all your personal data <br /> by pressing your name under the photo</h5>
          </div>
          <div className="row">
            <div className="col">
              <div className="border py-4 bgFotoHome rounded my-2">
                <h6>Frontend developer</h6>
                <img
                  data-aos={"fade-right"}
                  src={voda}
                  className="rounded"
                  style={{ width: "200px" }}
                />
                <p>
                  <Link
                    to={`portofolio/vodapermadi`}
                    className="btn bgButton my-2"
                  >
                    Philipus Voda Permadi
                  </Link>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="border py-4 bgFotoHome rounded my-2">
                <h6>UI/UX designer</h6>
                <img
                  data-aos={"fade-left"}
                  src={sabrina}
                  className="rounded-pill"
                  style={{ width: "265px" }}
                />
                <p>
                  <Link
                    to={`portofolio/sabrinautami`}
                    className="btn bgButton my-2"
                  >
                    Sabrina Utama
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center bgNavbar text-white py-4">
        Frontend Developer :{" "}
        <a href="https://www.instagram.com/cuma_voda/" className="text-white">
          Philipus Voda Permadi
        </a>
        <br />
        UI/UX Designer :{" "}
        <a href="https://www.instagram.com/sabrinaaau_/" className="text-white">
          Sabrina Utami
        </a>
      </footer>
    </div>
  );
};

export default HomeComponent;
