import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = ({ fetchMethod, fetchParams }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      setVideoData(await fetchMethod(...fetchParams));
    };

    fetchVideoData();
  }, [fetchParams]);

  return videoData === null
    ? null
    : videoData.map((v) => {
        return <VideoCard data={v} key={v.id} />;
      });
};

export default VideoContainer;
