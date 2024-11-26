import React from "react";
import styles from "./styles/LeftPanel.module.css";
import { FaUserCircle } from "react-icons/fa"; // Avatar icon
import { FaDollarSign, FaBuilding, FaRocket, FaCommentDots } from "react-icons/fa"; // Logos for communities
import { FaBookmark, FaUsers, FaNewspaper, FaCalendarAlt } from "react-icons/fa"; // Icons for new sections

const LeftPanel = () => {
  return (
    <div className={styles.leftPanel}>
      {/* Profile Card */}
      <div className={styles.panelCard}>
        <div className={styles.profileCard}>
          <div className={styles.avatar}>
            <FaUserCircle className={styles.avatarIcon} />
          </div>
          <h3 className={styles.profileName}>John Doe</h3>
          <p className={styles.profileTitle}>Software Engineer</p>
        </div>
      </div>

      {/* Discover Communities Section */}
      <div className={styles.panelCard}>
        <h3 className={styles.cardTitle}>Discover Communities</h3>
        <ul className={styles.communitiesList}>
          <li>
            <FaDollarSign className={styles.communityIcon} />
            <span className={styles.communityTitle}>Personal Finance</span>
          </li>
          <li>
            <FaBuilding className={styles.communityIcon} />
            <span className={styles.communityTitle}>Day to Day Office</span>
          </li>
          <li>
            <FaRocket className={styles.communityIcon} />
            <span className={styles.communityTitle}>Career Growth</span>
          </li>
          <li>
            <FaCommentDots className={styles.communityIcon} />
            <span className={styles.communityTitle}>Career Advice</span>
          </li>
          <li>
            <FaCommentDots className={styles.communityIcon} />
            <span className={styles.communityTitle}>Office Jokes</span>
          </li>
        </ul>
        <a href="#" className={styles.viewAll}>View all communities</a>
      </div>

      {/* Saved Items Section */}
      <div className={styles.panelCard}>
        <h3 className={styles.cardTitle}>Saved Items</h3>
        <ul className={styles.savedItemsList}>
          <li>Google SDE-1</li>
          <li>IQ Job</li>
          <li>Full Time</li>
        </ul>
      </div>

      {/* Groups Section */}
      <div className={styles.panelCard}>
        <h3 className={styles.cardTitle}>Groups</h3>
        <ul className={styles.groupsList}>
          <li>
            <FaUsers className={styles.groupIcon} />
            <span className={styles.groupTitle}>Tech Enthusiasts</span>
          </li>
          <li>
            <FaUsers className={styles.groupIcon} />
            <span className={styles.groupTitle}>Software Developers</span>
          </li>
        </ul>
      </div>

      {/* Newsletters Section */}
      <div className={styles.panelCard}>
        <h3 className={styles.cardTitle}>Newsletters</h3>
        <ul className={styles.newslettersList}>
          <li>Weekly Tech Roundup</li>
          <li>AI Insights</li>
        </ul>
      </div>

      {/* Events Section */}
      <div className={styles.panelCard}>
        <h3 className={styles.cardTitle}>Events</h3>
        <ul className={styles.eventsList}>
          <li>Tech Conference 2024</li>
          <li>AI Workshop</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
