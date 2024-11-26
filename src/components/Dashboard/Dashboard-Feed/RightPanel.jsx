import React from "react";
import styles from "./Styles/RightPanel.module.css";
import { FaHashtag, FaUserFriends } from "react-icons/fa"; // Importing icons

const RightPanel = () => {
  return (
    <div className={styles.rightPanel}>
      {/* Trending Section */}
      <div className={styles.panelCard}>
        <div className={styles.cardHeader}>
          <FaHashtag className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Trending</h3>
        </div>
        <ul className={styles.trendingList}>
          <li>#TechInnovation</li>
          <li>#AI</li>
          <li>#SoftwareEngineering</li>
        </ul>
      </div>

      {/* People You May Know Section */}
      <div className={styles.panelCard}>
        <div className={styles.cardHeader}>
          <FaUserFriends className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>People You May Know</h3>
        </div>
        <ul className={styles.peopleList}>
          <li>Jane Doe - Product Manager</li>
          <li>Bob Smith - Data Analyst</li>
          <li>Alice Johnson - UX Designer</li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
