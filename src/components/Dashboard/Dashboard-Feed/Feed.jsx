import React from "react";
import styles from './Styles/Feed.module.css';
import PostCard from "./PostCard";

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: "John Doe",
      role: "Software Engineer at TechCorp",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "Excited to share that I've joined TechCorp as a Software Engineer! Looking forward to contributing to exciting projects.",
      time: "2h ago",
      image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1732638316~exp=1732641916~hmac=a106a5461185cd7303072bc67db909a903a7a569b6c22f997851a40c281431e5&w=900", 
      video: null, 
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "HR Specialist at CareerBuild",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "We’re hiring! If you’re passionate about building great teams, check out our latest openings.",
      time: "5h ago",
      image: null, 
      video: "https://www.youtube.com/watch?v=pGGSNZ5bJA4", 
    },
    {
      id: 3,
      author: "Michael Johnson",
      role: "Product Manager at InnovateX",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "Just finished a major project launch! Grateful for all the support from my team.",
      time: "1d ago",
      image: null,
      // video: "video.mp4",
    },
    {
      id: 4,
      author: "Michael Johnson",
      role: "Product Manager at InnovateX",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "Just finished a major project launch! Grateful for all the support from my team.",
      time: "1d ago",
      image: null,
      video: null,
    },
    {
      id: 5,
      author: "Michael Johnson",
      role: "Product Manager at InnovateX",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "Just finished a major project launch! Grateful for all the support from my team.",
      time: "1d ago",
      image: null,
      video: null,
    },
  ];

  return (
    <div className={styles.feedContainer}>
      <div className={styles.postInput}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className={styles.avatar}
        />
        <input
          type="text"
          placeholder="Start a post"
          className={styles.inputBox}
        />
      </div>

      {/* Media, Event, Write Article buttons */}
      <div className={styles.postOptions}>
        <button className={styles.optionButton}>Media</button>
        <button className={styles.optionButton}>Event</button>
        <button className={styles.optionButton}>Write Article</button>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
