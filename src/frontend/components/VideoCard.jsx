import { Link, useNavigate } from 'react-router-dom';
import '../styles/VideoCard.css';

const VideoCard = ({ data }) => {
  const navigate = useNavigate();

  const navigateToChannel = () => {
    navigate('/video/' + data.id);
  };

  return data.id === null ? (
    <div className="video-card">
      <div className="video-card-title">{}</div>
    </div>
  ) : (
    <div className="video-card">
      <Link to={'/video/' + data.id} className="video-card-thumbnail-anchor">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="video-card-thumbnail"
        />
        <div className="video-card-text">
          <div className="video-card-title">{data.title}</div>
          <Link
            to={'/channel/' + data.channelId}
            className="video-card-channel-anchor"
          >
            <div className="video-card-channel">by {data.channelTitle}</div>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
