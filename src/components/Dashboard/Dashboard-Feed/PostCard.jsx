import React, { useState } from "react";
import styles from './Styles/Feed.module.css';

const PostCard = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText(""); // Clear input after submission
    }
  };

  return (
    <div className={styles.postCard}>
      <div className={styles.authorInfo}>
        <img
          src={post.profilePicture}
          alt={post.author}
          className={styles.authorAvatar}
        />
        <div className={styles.authorDetails}>
          <div className={styles.authorName}>{post.author}</div>
          <div className={styles.authorRole}>{post.role}</div>
        </div>
      </div>

      <div className={styles.postContent}>{post.content}</div>

      {post.image && (
        <div className={styles.imageContainer}>
          <img src={post.image} alt="Post media" />
        </div>
      )}
      {post.video && post.video.includes("youtube.com") && (
        <div className={styles.imageContainer}>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${post.video.split("v=")[1]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube video"
          />
        </div>
      )}
      {post.video && !post.video.includes("youtube.com") && (
        <div className={styles.imageContainer}>
          <video controls>
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className={styles.timeStamp}>{post.time}</div>

      <div className={styles.postActions}>
        <span className={styles.actionIcon}>Like</span>
        <span className={styles.actionIcon}>Comment</span>
        <span className={styles.actionIcon}>Share</span>
      </div>

      {/* Comment Section */}
      <div className={styles.commentSection}>
        <textarea
          className={styles.commentInput}
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        />
        <button onClick={handleCommentSubmit} className={styles.submitComment}>Post</button>

        <div className={styles.commentsList}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
