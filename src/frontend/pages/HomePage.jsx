import '../styles/HomePage.css';
import ConfigHelper from '../../backend/ConfigHelper';
import VideoContainer from '../components/VideoContainer';
import APIFetcher from '../../backend/APIFetcher';

const HomePage = () => {
  const videoSuggestionCount = ConfigHelper.getValue(
    'home-page-suggestion-count'
  );

  return (
    <div className="home-video-grid">
      <VideoContainer
        fetchMethod={APIFetcher.fetchSuggestedVideoSnippets}
        fetchParams={[videoSuggestionCount, null]}
      />
    </div>
  );
};

export default HomePage;
