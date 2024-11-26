import React, { useState } from "react";
import styles from "./Styles/PostCard.module.css";
import { SlLike } from "react-icons/sl";
import { BiCommentDetail } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";

const PostCard = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);

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
      <div className={styles.postborder}>
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
          <span className={styles.actionIcon}>
            Like <SlLike />
          </span>
          <span
            className={styles.actionIcon}
            onClick={() => setShowCommentInput(!showCommentInput)}
          >
            Comment <BiCommentDetail />
          </span>
          <span className={styles.actionIcon}>
            Share <FiShare2 />
          </span>
        </div>
      </div>

      {/* Comment Section */}
      {showCommentInput && (
        <div className={styles.commentSection}>
          {comments.length > 0 && (
            <div className={styles.topComment}>
              <strong>Top Comment:</strong> {comments[comments.length - 1]}
            </div>
          )}
          <textarea
            className={styles.commentInput}
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
          />
          <button
            onClick={handleCommentSubmit}
            className={styles.submitComment}
          >
            Post
          </button>

          <div className={styles.commentsList}>
            {comments.map((comment, index) => (
              <div key={index} className={styles.comment}>
                {comment}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
