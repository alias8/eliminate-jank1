APP.Data = ((() => {

    const HN_API_BASE = 'https://hacker-news.firebaseio.com';
    const HN_TOPSTORIES_URL = `${HN_API_BASE}/v0/topstories.json`;
    const HN_STORYDETAILS_URL = `${HN_API_BASE}/v0/item/[ID].json`;

    function getTopStories(callback) {
        request(HN_TOPSTORIES_URL, evt => {
            callback(evt.target.response);
        });
    }

    function getStoryById(id, callback) {

        const storyURL = HN_STORYDETAILS_URL.replace(/\[ID\]/, id);

        request(storyURL, evt => {
            callback(evt.target.response);
        });
    }

    function getStoryComment(id, callback) {

        const storyCommentURL = HN_STORYDETAILS_URL.replace(/\[ID\]/, id);

        request(storyCommentURL, evt => {
            callback(evt.target.response);
        });
    }

    function request(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = callback;
        xhr.send();
    }

    return {
        getTopStories,
        getStoryById,
        getStoryComment
    };

}))();