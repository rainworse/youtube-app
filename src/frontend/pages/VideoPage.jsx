import { useParams } from 'react-router-dom';
import LocalStorageDB from '../../backend/LocalStorageDB';
import VideoPlayer from '../components/VideoPlayer';
import '../styles/VideoPage.css';
import CommentSection from '../components/CommentSection';
import ConfigHelper from '../../backend/ConfigHelper';
import VideoContainer from '../components/VideoContainer';
import APIFetcher from '../../backend/APIFetcher';

const VideoPage = () => {
  const params = useParams();
  const suggestionCount = ConfigHelper.getValue('video-page-suggestion-count');

  return (
    <div className="video-page">
      <div className="video-section">
        <div className="video-player">
          <VideoPlayer src={LocalStorageDB.getVideoURL(params.id)} />
        </div>

        <div className="video-comment-section">
          <CommentSection videoID={params.id} />
        </div>
      </div>

      <div className="video-suggestion-sidebar">
        <VideoContainer
          fetchMethod={APIFetcher.fetchSuggestedVideoSnippets}
          fetchParams={[suggestionCount, params.id]}
        />
      </div>
    </div>
  );
};

export default VideoPage;
