import React from "react";
import styles from "./styles/Feed.module.css";
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
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "HR Specialist at CareerBuild",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "We’re hiring! If you’re passionate about building great teams, check out our latest openings.",
      time: "5h ago",
    },
    {
      id: 3,
      author: "Michael Johnson",
      role: "Product Manager at InnovateX",
      profilePicture: "https://via.placeholder.com/40",
      content:
        "Just finished a major project launch! Grateful for all the support from my team.",
      time: "1d ago",
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
