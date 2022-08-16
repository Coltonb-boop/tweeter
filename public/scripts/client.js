/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      $('#tweets-container').append($tweet);
    }
  }

  const createTweetElement = (tweetData) => {
    const $newTweet = $(`
      <article class="tweet">
        <header>
          <div class="tweet-sub-header">
            <div>
              <img src=${tweetData.user.avatars} />
            </div>
            <div>
              ${tweetData.user.name}
            </div>
          </div>
          <div class="username-font">
            ${tweetData.user.handle}
          </div>
        </header>

        <div class="tweet-body">
          ${tweetData.content.text}
        </div>

        <footer>
          <div>
            ${tweetData.created_at}
          </div>
          <div class="tweet-footer-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);

    return $newTweet;
  };

  renderTweets(data);
});