import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIFetcher from '../../backend/APIFetcher';
import '../styles/ChannelPage.css';
import ConfigHelper from '../../backend/ConfigHelper';
import VideoCard from '../components/VideoCard';

const ChannelPage = () => {
  const params = useParams();
  const channelVideoCount = ConfigHelper.getValue('channel-page-video-count');
  const [channelData, setChannelData] = useState(null);
  const [channelVideoData, setChannelVideoData] = useState(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      const channelData = await APIFetcher.fetchChannelData(params.id);
      setChannelData(channelData);
    };
    const fetchChannelVideoData = async () => {
      const videoData = await APIFetcher.fetchChannelVideos(
        params.id,
        channelVideoCount
      );
      setChannelVideoData(videoData);
    };

    fetchChannelData();
    fetchChannelVideoData();
  }, []);

  return (
    <div className="channel-page">
      {channelData === null ? null : (
        <div className="channel-info">
          <img
            className="channel-thumbnail"
            src={channelData.thumbnail}
            alt={channelData.title}
          />
          <div className="channel-text-info">
            <div className="channel-subscriber-count">
              Subscribers: {channelData.subscriberCount}
            </div>
            <div className="channel-title">{channelData.title}</div>
          </div>
        </div>
      )}
      <div className="channel-videos">
        {channelVideoData === null
          ? null
          : channelVideoData.map((v) => {
              return <VideoCard data={v} key={v.id} />;
            })}
      </div>
    </div>
  );
};

export default ChannelPage;
