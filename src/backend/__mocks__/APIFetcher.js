const videos = [
  {
    id: '001',
    title: 'test video1',
    thumbnail: 'non/existent/location1',
    channelTitle: 'test channel1',
    channelId: 'channel001',
  },

  {
    id: '002',
    title: 'test video2',
    thumbnail: 'non/existent/location2',
    channelTitle: 'test channel2',
    channelId: 'channel002',
  },

  {
    id: '003',
    title: 'test video3',
    thumbnail: 'non/existent/location3',
    channelTitle: 'test channel3',
    channelId: 'channel003',
  },

  {
    id: '004',
    title: 'test video4',
    thumbnail: 'non/existent/location4',
    channelTitle: 'test channel4',
    channelId: 'channel004',
  },
];

const comments = [
  {
    author: 'john pork',
    authorImage: 'fake/url1',
    authorChannel: 'channel1/url',
    commentText: 'sample comment',
    id: '001',
  },

  {
    author: 'richard d james',
    authorImage: 'fake/url2',
    authorChannel: 'channel2/url',
    commentText: 'another comment',
    id: '002',
  },
];

const APIFetcher = {
  fetchSuggestedVideoSnippets: () => Promise.resolve([videos[0], videos[1]]),
  fetchChannelData: () =>
    Promise.resolve({
      id: '001',
      title: 'test channel',
      thumbnail: 'fake/channel/thumbnail',
      subscriberCount: '666',
    }),
  fetchChannelVideos: () => Promise.resolve([videos[0], videos[1], videos[2]]),
  fetchVideoComments: () => Promise.resolve([comments[0], comments[1]]),
  fetchSearchVideos: (searchTerm, maxResults) =>
    Promise.resolve([videos[0], videos[1], videos[2], videos[3]]),
};

export default APIFetcher;
