import { useContext, useEffect, useRef, useState } from 'react';
import APIFetcher from '../../backend/APIFetcher';
import Comment from './Comment';
import ConfigHelper from '../../backend/ConfigHelper';
import UserContext from '../UserContext';
import LocalStorageDB from '../../backend/LocalStorageDB';

const CommentSection = ({ videoID }) => {
  const [commentData, setCommentData] = useState(null);
  const [localComments, setLocalComments] = useState(null);
  const commentCount = ConfigHelper.getValue('video-page-comment-count');
  const { currentUser } = useContext(UserContext);
  const commentRef = useRef(null);

  useEffect(() => {
    const fetchCommentSection = async () => {
      const videoComments = await APIFetcher.fetchVideoComments(
        videoID,
        commentCount
      );
      setCommentData(videoComments);
    };

    fetchCommentSection();

    setLocalComments(LocalStorageDB.getComments(videoID));
  }, [videoID]);

  const addComment = (e) => {
    e.preventDefault();
    const data = {
      author: currentUser,
      authorImage:
        'https://yt3.ggpht.com/ytc/AOPolaQ9xkRNBgGHvCyxvsigkwlVu5Ow_7NL1isHVQ=s48-c-k-c0x00ffffff-no-rj',
      authorChannel: '',
      commentText: commentRef.current.value,
      id: Math.random().toString(16).slice(-4),
    };
    commentRef.current.value = '';
    LocalStorageDB.postComment(videoID, data);
    setLocalComments(LocalStorageDB.getComments(videoID));
  };

  return (
    <>
      {currentUser === null ? null : (
        <form className="add-comment-form" onSubmit={addComment}>
          <textarea
            id="add-comment-field"
            name="add-comment"
            placeholder="Add a comment..."
            ref={commentRef}
          />
          <input type="submit" value="Post" id="post-comment" />
        </form>
      )}

      {commentData === null ? (
        <> </>
      ) : (
        <>
          {localComments.map((c) => {
            return <Comment data={c} key={c.id} />;
          })}
          {commentData.map((c) => {
            return <Comment data={c} key={c.id} />;
          })}
        </>
      )}
    </>
  );
};

export default CommentSection;
