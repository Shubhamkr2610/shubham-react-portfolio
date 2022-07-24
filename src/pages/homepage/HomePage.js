import React from "react";
import { cv, herobg1, herobg2, heroimg } from "../../asset";
import "./homepage.css";

export const HomePage = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-name">
            <span></span>
            <span>Hey! I am👋 </span>
            <span>Shubham</span>
            <span>Advanced Frontend Developer</span>
            <span>I like to build responsive and user friendly web-apps </span>
          </div>
          <div className="hero-info-button-container">
            <a href={cv} download>
              <button className="info-primary-button">Download CV</button>
            </a>
            <a href="">
              <button className="info-primary-button">About Me</button>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={herobg1} alt="" />
          <img src={herobg2} alt="" />
          <img src={heroimg} alt="" />
          <div
            className="blur-color"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur-color"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
