import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoBagRemove } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import "./DashboardNav.css";

const DashboardNavbar = () => {
  const [searchCategory, setSearchCategory] = useState("All");
  const [isArrowRotated, setIsArrowRotated] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const categories = [
    { value: "All", placeholder: "Search for anything..." },
    { value: "Companies", placeholder: "Search for companies..." },
    { value: "Jobs", placeholder: "Search for jobs..." },
    { value: "Reviews", placeholder: "Search for reviews..." },
    { value: "Salaries", placeholder: "Search for salaries..." },
  ];

  const getPlaceholder = () => {
    const selectedCategory = categories.find(
      (category) => category.value === searchCategory
    );
    return selectedCategory ? selectedCategory.placeholder : "Search...";
  };

  return (
    <nav className="navbar">
      <div className="top-row">
        <div className="logo">
          <a href="/">
            <img src="/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder={getPlaceholder()}
              className="search-input"
            />
            <span className="searchbar-line">|</span>
            <select
              className="search-category"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              onClick={() => setIsArrowRotated(!isArrowRotated)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.value}
                </option>
              ))}
            </select>
            <IoIosArrowDown
              className={`searchbar-arrow-icon ${
                isArrowRotated ? "rotate" : ""
              }`}
            />
            <CiSearch className="search-icon" />
          </div>
        </div>

        <div className="icon-section">
          <div className="icon">
            <IoMdHome className="icon-svg" />
            <span>Home</span>
          </div>
          <div className="icon">
            <IoMdPeople className="icon-svg" />
            <span>My Network</span>
          </div>
          <div className="icon">
            <IoBagRemove className="icon-svg" />
            <span>Job</span>
          </div>
          <div className="icon">
            <AiFillMessage className="icon-svg" />
            <span>Messaging</span>
          </div>
          <div className="icon">
            <IoIosNotifications className="icon-svg" />
            <span>Notification</span>
          </div>
          <div className="line-break">
            <span>|</span>
          </div>
        </div>

        <div className="right-section">
          <button className="contribute">+ Contribute</button>
          <div className="line-break">
            <span>|</span>
          </div>
          <div
  className="icon icon-right profile-dropdown-container"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <IoPersonCircleOutline className="icon-svg icon-right-svg" />
  {isDropdownOpen && (
    <div className="profile-dropdown-menu">
      <a className="profile-dropdown-item" href="/profile">Profile</a>
      <a className="profile-dropdown-item" href="/preferences">Manage Preferences</a>
      <a className="profile-dropdown-item" href="/settings">Settings</a>
      <a className="profile-dropdown-item" href="/logout">Logout</a>
    </div>
  )}
</div>

        </div>
      </div>

      <div className="second-row">
        <button className="hamburger-menu" aria-label="Toggle Menu">
          ☰
        </button>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
          <li className="dropdown">
            <a href="#">
              Reviews <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Employee Reviews</a>
              </li>
              <li>
                <a href="#">Company Ratings</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              Salaries <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Software Engineer</a>
              </li>
              <li>
                <a href="#">Data Scientist</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              Interviews <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Common Questions</a>
              </li>
              <li>
                <a href="#">Interview Experiences</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Job</a>
          </li>
          <li className="dropdown">
            <a href="#">
              Awards <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Best Companies</a>
              </li>
              <li>
                <a href="#">Top Startups</a>
              </li>
            </ul>
          </li>
          <button className="rate-now">Rate Now</button>
          <li>
            <a href="#">For Employers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
