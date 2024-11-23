// import React from "react";
// import "./HomePage.css";

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       <header className="hero">
//         <div className="hero-content">
//           <h1>Welcome to MySite</h1>
//           <p>Your go-to platform for company reviews, salaries, and jobs.</p>
//           <button className="explore-button">Explore Now</button>
//         </div>
//       </header>

//       <section className="features">
//         <h2>Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>Company Reviews</h3>
//             <p>Read reviews from employees across various companies.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Salaries</h3>
//             <p>Find out what people earn in your industry.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Job Listings</h3>
//             <p>Explore opportunities tailored to your skills and interests.</p>
//           </div>
//         </div>
//       </section>

//       <section className="about">
//         <h2>About Us</h2>
//         <p>
//           At MySite, we aim to bridge the gap between job seekers and
//           opportunities by providing insights and resources to make informed
//           career decisions.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import './HomePage.css';
// import Card from '../Cards/Card';

// const HomePage = () => {
//     return (
//         <div className="home">
//             <div className="hero-section">
//                 <h1>Discover Companies, Find Jobs, Get Insights.</h1>
//                 <p>Your career journey begins here!</p>
//                 <button className="hero-button">Start Exploring</button>
//             </div>

//             <div className="card-section">
//                 <h2>Top Companies</h2>
//                 <div className="card-container">
//                     <Card title="Google" description="Explore salaries, reviews, and jobs at Google." />
//                     <Card title="Amazon" description="Discover Amazon's culture, jobs, and pay scale." />
//                     <Card title="Microsoft" description="Learn about careers and reviews at Microsoft." />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;


import React from 'react'
import Hero from './Hero/Hero'
import Hero2 from './Hero2/Hero2'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Hero2 />
    </>
  )
}

export default HomePage