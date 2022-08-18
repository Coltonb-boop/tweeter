
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  $('#new-tweet-container').submit( function(e) {
    e.preventDefault();
    const value = $('#tweet-text').val();
    
    if (!value) {
      // alert('You didn\'t write a tweet');
      $('.complaint-department').hide();
      $('.complaint-department').text('You didn\'t write a tweet');
      $('.complaint-department').show(500);
      return;
    }
    if (value.length > 140) {
      // alert('You had too much to say!');
      $('.complaint-department').hide();
      $('.complaint-department').text('You had too much to say!');
      $('.complaint-department').show(500);
      return;
    }
    
    const formData = $('#new-tweet-container').serialize();
    $('.complaint-department').hide();
    $( ".counter" ).val(140);
    $('#tweet-text').val('');
    $.post('/tweets', formData, () => {
      loadTweets();
    });
  });

  const loadTweets = () => {
    $.get('http://localhost:8080/tweets')
      .then(function (tweets) {
        $('#tweets-container').html('');
        renderTweets(tweets);
    });
  };
  loadTweets();

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      $('#tweets-container').prepend($tweet);
    }
  };

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
          ${escape(tweetData.content.text)}
        </div>

        <footer>
          <div>
            ${timeago.format(tweetData.created_at)}
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

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

});