const videoPlayer = document.getElementById('videoPlayer');

document.getElementById('watchVideo1Btn').addEventListener('click', function() {
  videoPlayer.src = "./Assets/video1.mp4";  // Replace with the path to your video 1
  videoPlayer.style.display = 'block';
  videoPlayer.play();
});

document.getElementById('watchVideo2Btn').addEventListener('click', function() {
  videoPlayer.src = "./Assets/video2.mp4";  // Replace with the path to your video 2
  videoPlayer.style.display = 'block';
  videoPlayer.play();
});

// Optional: Add functionality to close the video player (e.g., clicking outside the video)
