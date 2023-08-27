import VideoContainer from '../components/VideoContainer';
import APIFetcher from '../../backend/APIFetcher';
import ConfigHelper from '../../backend/ConfigHelper';
import { useParams } from 'react-router-dom';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const params = useParams();
  const resultCount = ConfigHelper.getValue('search-page-video-count');

  return (
    <div className="search-results">
      <VideoContainer
        fetchMethod={APIFetcher.fetchSearchVideos}
        fetchParams={[params.q, resultCount]}
      />
    </div>
  );
};

export default SearchPage;
