const videoContainer = document.getElementById("jsVideoPlayer");
let videoPlayer = videoContainer.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const volumeButton = document.getElementById("jsVolumeButton");
const fullScreenButton = document.getElementById("jsFullScreen");

function init()
{
    playButton.addEventListener("click",handlePlayClick);
    volumeButton.addEventListener("click",handleVolumeClick);
    fullScreenButton.addEventListener("click",goFullScreenClick);
}

function handlePlayClick()
{
    if(videoPlayer.paused)
    {
        videoPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    else
    {
        videoPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function handleVolumeClick()
{
    if(videoPlayer.muted)
    {
        videoPlayer.muted = false;
        volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    else
    {
        videoPlayer.muted = true;
        volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

function goFullScreenClick()
{
    videoContainer.requestFullscreen();
    fullScreenButton.innerHTML= '<i class="fas fa-compress"></i>';
    fullScreenButton.removeEventListener("click",goFullScreenClick);
    fullScreenButton.addEventListener("click",removeFullScreenClick);
}

function removeFullScreenClick()
{
    document.exitFullscreen();
    fullScreenButton.innerHTML= '<i class="fas fa-expand"></i>';
    fullScreenButton.removeEventListener("click",removeFullScreenClick);
    fullScreenButton.addEventListener("click",goFullScreenClick);
}



if(videoContainer)
{
    init();
}
