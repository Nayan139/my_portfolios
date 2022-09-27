import React from "react";
import Typical from "react-typical";
import "./Home.css";

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-google"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {}
              Hello, I'M <span className="highlighted-text">Nayan</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {}
              <h1>
                <Typical
                  steps={[
                    "Nayan Bhakhar😊",
                    2000,
                    "Full-Stack Developer🖥️",
                    2000,
                    "MERN-Stack Developer💻",
                    2000,
                    "React/Node Developer🖥️",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Knock of building application with front and back end operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire me</button>
            <a href="Nyn.pdf" download="1_Nyn.pdf" target="_blank">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
