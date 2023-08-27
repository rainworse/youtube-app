const initialVideos = [
  {
    id: 'OmnkRRZHpE8',
    title: 'my first video',
    src: 'https://www.youtube.com/watch?v=OmnkRRZHpE8&ab_channel=insane1',
    thumbnail: 'try.png',
  },

  {
    id: 'fSjc8vLMg8c',
    title: 'easy',
    src: 'https://www.youtube.com/watch?v=fSjc8vLMg8c&ab_channel=jdh',
    thumbnail: 'hard.jpg',
  },

  {
    id: 'SEDigXYnn-k',
    title: 'jumping no crime',
    src: 'https://www.youtube.com/watch?v=SEDigXYnn-k&ab_channel=asirian',
    thumbnail: 'hella hard.jpg',
  },

  {
    id: 'JOAFWTO-8AQ',
    title: 'Casual Background',
    src: 'https://www.youtube.com/watch?v=JOAFWTO-8AQ&ab_channel=TaintedTownMusic',
    thumbnail: 'nyz.png',
  },

  {
    id: 'H8K4rl2uvuA',
    title: 'oppenheimer',
    src: 'https://www.youtube.com/watch?v=H8K4rl2uvuA&t=93s&ab_channel=ArchaicFiles',
    thumbnail: 'me me.png',
  },

  {
    id: '2M94jjVCW60',
    title: 'sizifas',
    src: 'https://www.youtube.com/watch?v=2M94jjVCW60&ab_channel=o1o1o1',
    thumbnail: 'berserk.jpg',
  },

  {
    id: 'kQHFn6527lI',
    title: 'Particles (slowed) - 1980 Mr. Olympia',
    src: 'https://www.youtube.com/watch?v=kQHFn6527lI&ab_channel=Saintike',
    thumbnail: 'what.png',
  },

  {
    id: 'uhJRaPks59g',
    title: 'Walter Hartwelt White',
    src: 'https://www.youtube.com/watch?v=uhJRaPks59g&ab_channel=Walthu99.3',
    thumbnail: 'skull.png',
  },

  {
    id: 'imMJZtOwjGE',
    title: 'hopecore',
    src: 'https://www.youtube.com/watch?v=imMJZtOwjGE&ab_channel=stanscinematics',
    thumbnail: 'patch.png',
  },
];

const LocalStorageDB = (() => {
  const initDB = () => {
    localStorage.clear();
    if (localStorage.getItem('videoIDs') === null) {
      let videoIds = [];

      for (let video of initialVideos) {
        localStorage.setItem('video' + video.id, JSON.stringify(video));
        videoIds.push(video.id);
      }

      localStorage.setItem('videoIDs', JSON.stringify(videoIds));
    }
  };

  const getVideoIDs = () => {
    return JSON.parse(localStorage.getItem('videoIDs'));
  };

  const getVideo = (id) => {
    const video = localStorage.getItem('video' + id);
    return video === null ? undefined : JSON.parse(video);
  };

  const getVideoURL = (id) => {
    return `https://www.youtube.com/embed/${id}?enablejsapi=1`;
  };

  const getSuggestedVideo = (exclude) => {
    let videoIDs = getVideoIDs();
    videoIDs = videoIDs.filter((v) => !exclude.includes(v));
    return videoIDs[Math.floor(Math.random() * videoIDs.length)];
  };

  const postComment = (videoID, data) => {
    let videoComments = getComments(videoID);

    videoComments.unshift(data);
    localStorage.setItem(videoID, JSON.stringify(videoComments));
  };

  const getComments = (videoID) => {
    let videoComments = localStorage.getItem(videoID);
    if (videoComments === null) {
      videoComments = [];
    } else {
      videoComments = JSON.parse(videoComments);
    }

    return videoComments;
  };

  const storeUserSession = (userData) => {
    localStorage.setItem('userSession', JSON.stringify(userData));
  };

  const getUserSession = () => {
    const userData = localStorage.getItem('userSession');
    return userData === null ? null : JSON.parse(userData);
  };

  return {
    initDB,
    getVideoIDs,
    getVideo,
    getVideoURL,
    getSuggestedVideo,
    postComment,
    getComments,
    storeUserSession,
    getUserSession,
  };
})();

export default LocalStorageDB;
