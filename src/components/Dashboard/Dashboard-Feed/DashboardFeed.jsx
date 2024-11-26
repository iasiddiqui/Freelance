import React from "react";
// import styles from "./DashboardFeed.module.css";
import styles from "./Styles/DashboardFeed.module.css";
import LeftPanel from "./LeftPanel";
import Feed from "./Feed";
import RightPanel from "./RightPanel";

const DashboardFeed = () => {
  

  return (
    <div className={styles.dashboard}>
      <LeftPanel />
      <Feed />
      <RightPanel />
    </div>
  );
};

export default DashboardFeed;
