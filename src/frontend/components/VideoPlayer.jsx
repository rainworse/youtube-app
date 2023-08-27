import { useEffect, useState } from 'react';

const MyVideoPlayer = ({ src }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const playerSize = 1.9;
  const widthToHeight = 640 / 360;

  return (
    <iframe
      id="iframe-video-player"
      width={windowWidth / playerSize}
      height={windowWidth / playerSize / widthToHeight}
      src={src}
    ></iframe>
  );
};

export default MyVideoPlayer;
