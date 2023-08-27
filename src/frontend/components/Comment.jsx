import '../styles/Comment.css';

const Comment = ({ data }) => {
  return (
    <div className="video-comment">
      <img
        src={data.authorImage}
        alt="image"
        className="video-comment-author-image"
      />
      <div className="video-comment-content">
        <div className="video-comment-author-name">{data.author}</div>
        <div className="video-comment-text">{data.commentText}</div>
      </div>
    </div>
  );
};

export default Comment;
