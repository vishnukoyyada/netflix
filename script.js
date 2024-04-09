const videoPlayer = document.getElementById('videoPlayer');
const watchVideo1Btn = document.getElementById('watchVideo1Btn');
const watchVideo2Btn = document.getElementById('watchVideo2Btn');

function playVideo(videoPath) {
  videoPlayer.src = videoPath;
  videoPlayer.style.display = 'block';
  videoPlayer.play();
}

watchVideo1Btn.addEventListener('click', function() {
  playVideo('./Assets/video2.mp4');
});

watchVideo2Btn.addEventListener('click', function() {
  playVideo('./Assets/video1.mp4');
});
