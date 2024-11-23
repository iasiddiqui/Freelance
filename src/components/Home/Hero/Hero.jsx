import React from "react";
import "./Hero.css";
import { IoIosArrowForward } from "react-icons/io";


const HomePage = () => {
  return (
    <div className="hero">
      <h1>JOBBLISS</h1>
      <div className="cards-container">
        {/* Discover Section */}
        <div className="card">
          <h3>Discover </h3>
          <p>
            Embark on your career journey with jobbliss, where opportunities
            meet ambition.
          </p>
          <button>Services <IoIosArrowForward/> </button>
        </div>

        {/* Connect Section */}
        <div className="card card1">
          <h3>Connect</h3>
          <p>
            Build your professional network and unlock new career possibilities
            in a collaborative environment.
          </p>
          <button>Services <IoIosArrowForward/></button>
        </div>

        {/* Explore Section */}
        <div className="card">
          <h3>Explore</h3>
          <p>
            Dive into a wealth of job listings while gaining insights into the
            companies that matter.
          </p>
          <button>Services<IoIosArrowForward/></button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
