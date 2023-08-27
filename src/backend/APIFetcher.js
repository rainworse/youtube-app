import ConfigHelper from './ConfigHelper';

const APIFetcher = (() => {
  const key = ConfigHelper.getValue('youtube-api-key');

  const fetchVideoSuggestions = async (count, relatedTo) => {
    const request =
      relatedTo === null
        ? createFetchRequest('search', { maxResults: count })
        : createFetchRequest('search', { maxResults: count, relatedTo });
    const response = await fetch(request);
    const videos = await response.json();
    const ids = [];
    for (const videoResult of videos.items) {
      ids.push(videoResult.id.videoId);
    }

    return ids;
  };

  const fetchMultipleVideoSnippets = async (ids) => {
    const response = await fetch(
      createFetchRequest('videos', {
        part: 'snippet',
        id: ids.join('%2C'),
      })
    );
    const videoSnippets = await response.json();
    return parseVideoSnippetData(videoSnippets, 'id');
  };

  const fetchSuggestedVideoSnippets = async (count, relatedTo) => {
    const suggestedVideoIds = await fetchVideoSuggestions(count, relatedTo);
    const suggestedVideoSnippets = await fetchMultipleVideoSnippets(
      suggestedVideoIds
    );
    return suggestedVideoSnippets;
  };

  // const fetchVideoSnippet = async (id) => {
  //   const response = await fetch(
  //     createFetchRequest('videos', { part: 'snippet', id })
  //   );
  //   const videoSnippet = await response.json();
  //   const data = {
  //     title: videoSnippet.items[0].snippet.title,
  //     thumbnail: videoSnippet.items[0].snippet.thumbnails.medium.url,
  //   };

  //   return data;
  // };

  const createFetchRequest = (requestType, params) => {
    let request =
      'https://youtube.googleapis.com/youtube/v3/' + requestType + '?';
    Object.keys(params).forEach((param) => {
      request += param + '=' + params[param] + '&';
    });
    request += 'key=' + key;

    return request;
  };

  const fetchVideoComments = async (videoId, count) => {
    const response = await fetch(
      createFetchRequest('commentThreads', {
        part: 'snippet%2Creplies',
        maxResults: count,
        videoId: videoId,
      })
    );
    const commentThreads = await response.json();
    const commentData = [];
    for (const comment of commentThreads.items) {
      commentData.push({
        author: comment.snippet.topLevelComment.snippet.authorDisplayName,
        authorImage:
          comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        authorChannel: comment.snippet.topLevelComment.snippet.authorChannelUrl,
        commentText: comment.snippet.topLevelComment.snippet.textDisplay,
        id: comment.snippet.topLevelComment.id,
      });
    }

    return commentData;
  };

  const fetchChannelData = async (id) => {
    const response = await fetch(
      createFetchRequest('channels', {
        part: 'snippet%2CcontentDetails%2Cstatistics',
        id,
      })
    );
    const channel = (await response.json()).items[0];
    const channelData = {
      id,
      title: channel.snippet.title,
      thumbnail: channel.snippet.thumbnails.medium.url,
      subscriberCount: channel.statistics.subscriberCount,
    };

    return channelData;
  };

  const fetchChannelVideos = async (channelId, maxResults) => {
    const response = await fetch(
      createFetchRequest('search', {
        part: 'snippet',
        channelId,
        maxResults,
        order: 'date',
      })
    );
    const channelVideos = await response.json();
    return parseVideoSnippetData(channelVideos, 'id.videoId');
  };

  const fetchSearchVideos = async (searchTerm, maxResults) => {
    const response = await fetch(
      createFetchRequest('search', {
        part: 'snippet',
        maxResults,
        q: searchTerm,
      })
    );

    const videoSnippets = await response.json();
    return parseVideoSnippetData(videoSnippets, 'id.videoId');
  };

  const parseVideoSnippetData = (videoSnippets, idLocation) => {
    const snippetData = [];
    for (const item of videoSnippets.items) {
      const data = {
        id: findId(item, idLocation),
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        channelId: item.snippet.channelId,
      };

      snippetData.push(data);
    }

    return snippetData;
  };

  const findId = (item, location) => {
    return [item].concat(location.split('.')).reduce((a, b) => a[b]);
  };

  return {
    fetchVideoSuggestions,
    fetchMultipleVideoSnippets,
    fetchSuggestedVideoSnippets,
    fetchVideoComments,
    fetchChannelData,
    fetchChannelVideos,
    fetchSearchVideos,
  };
})();

export default APIFetcher;
