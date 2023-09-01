const comments = [
  {
    author: 'local man',
    authorImage: 'fake/urllocal',
    authorChannel: 'channellocal/url',
    commentText: 'local comment',
    id: '999',
  },
];

const LocalStorageDB = {
  getVideoURL: () => 'fake/video/url',
  postComment: (videoId, data) => {
    comments.push(data);
  },
  getComments: () => comments,
};

export default LocalStorageDB;
