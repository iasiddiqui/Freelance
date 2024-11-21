import React, { useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import { AiFillBug } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="top-row">
        <div className="logo">My <span className="logo-span">Site</span></div>

        <div className="icon-section">
          <div className="icon">
            <RiArticleLine className="icon-svg" />
            <span>Article</span>
          </div>
          <div className="icon">
            <IoMdPeople className="icon-svg" />
            <span>People</span>
          </div>
          <div className="icon">
            <MdOndemandVideo className="icon-svg" />
            <span>Learning</span>
          </div>
          <div className="icon">
            <IoBagRemove className="icon-svg" />
            <span>Jobs</span>
          </div>
          <div className="icon">
            <AiFillBug className="icon-svg" />
            <span>Games</span>
          </div>
          <div className="line-break">
            <span>|</span>
          </div>
        </div>

        <div className="right-section">
          <button className="rate-now">Rate Now</button>
          <button className="sign-in"> + Contribute</button>
          <button className="join-now">Join Now</button>
          <button className="login">Login</button>
        </div>
      </div>

      <div className="second-row">
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Communities</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Salaries</a>
          </li>
          <li>
            <a href="#">Interviews</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
