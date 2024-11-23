import React from "react";
import "./Hero2.css";
import { IoIosArrowForward } from "react-icons/io";

const Hero2 = () => {
  return (
    <>
      <div className="Hero2-container">
        <div className="upper-heading">
          <h1>Our Feature</h1>
          <p>Innovative tools to enhance your job search experience.</p>
        </div>
        <div className="hero2-button">
          <button className="contact-hero-btn">Contact</button>
          <button className="reviews-hero-btn">Reviews</button>
        </div>
        <div className="hero2-cards-container">
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Job Listings</h3>
              <p className="hero2-description">A wide range of job opportunities tailored to your skills.</p>
            </div>
          </div>
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Company Insights</h3>
              <p className="hero2-description">In-depth reviews and ratings from current and past employees.</p>
            </div>
          </div>
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Networking Opportunities</h3>
              <p className="hero2-description">Connect with industry professionals and expand your network.</p>
            </div>
          </div>
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Career Resources</h3>
              <p className="hero2-description">Access guides and tips to enhance your job search.</p>
            </div>
          </div>
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Webinars</h3>
              <p className="hero2-description">Learn from experts on various career-related topics.</p>
            </div>
          </div>
          <div className="hero2-cards">
            <div className="hero2-icon">
              <IoIosArrowForward />
            </div>
            <div className="hero2-content">
              <h3>Remote Job Search</h3>
              <p className="hero2-description">Find opportunities that fit your lifestyle and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
