import React from "react";
import styles from "./styles/PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <img
          src={post.profilePicture}
          alt="Author"
          className={styles.avatar}
        />
        <div>
          <p className={styles.author}>{post.author}</p>
          <p className={styles.role}>{post.role}</p>
          <p className={styles.time}>{post.time}</p>
        </div>
      </div>
      <div className={styles.postContent}>
        <p>{post.content}</p>
      </div>
      <div className={styles.postFooter}>
        <button className={styles.actionButton}>Like</button>
        <button className={styles.actionButton}>Comment</button>
        <button className={styles.actionButton}>Share</button>
      </div>
    </div>
  );
};

export default PostCard;
