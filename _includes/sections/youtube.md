<figure id="fig:congressional-hearing" class="video-figure">
  <iframe id="youtubePlayer" width="560" height="315" src="https://www.youtube.com/embed/JyILxUHm3L0?start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <figcaption>Figure 19: Example YouTube Video</figcaption>
</figure>

<script>
  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Create the YouTube player and attach it to the iframe with the given ID
  var player;
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtubePlayer', {
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
  }

  // Play the video when the player is ready
  function onPlayerReady(event) {
      event.target.playVideo();
  }

  // Stop the video when the specified end time is reached
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
          var endTime = 60; // Set the end time in seconds
          setTimeout(stopVideo, (endTime - 30) * 1000); // Calculate the duration to play
      }
  }

  // Function to stop the video
  function stopVideo() {
      player.stopVideo();
  }
</script>