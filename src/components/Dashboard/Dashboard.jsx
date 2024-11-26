import React from 'react'
import "./Dashboard.css";
import DashboardNavbar from './Navbar/DashboardNav';
import DashboardFeed from './Dashboard-Feed/DashboardFeed';

function Dashboard() {
  return (

    <div className="dashboard-main">
    <DashboardNavbar />
    <DashboardFeed/>
    </div>
  )
}

export default Dashboard
