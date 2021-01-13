const videoContainer = document.getElementById("jsVideoPlayer");
let videoPlayer = videoContainer.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
let i=1;
console.log(videoContainer,i++);

function init()
{
    playButton.addEventListener("click",handlePlayClick)
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

if(videoContainer)
{
    init();
}
