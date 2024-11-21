import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to MySite</h1>
          <p>Your go-to platform for company reviews, salaries, and jobs.</p>
          <button className="explore-button">Explore Now</button>
        </div>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Company Reviews</h3>
            <p>Read reviews from employees across various companies.</p>
          </div>
          <div className="feature-card">
            <h3>Salaries</h3>
            <p>Find out what people earn in your industry.</p>
          </div>
          <div className="feature-card">
            <h3>Job Listings</h3>
            <p>Explore opportunities tailored to your skills and interests.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          At MySite, we aim to bridge the gap between job seekers and
          opportunities by providing insights and resources to make informed
          career decisions.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
