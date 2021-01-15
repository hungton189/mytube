const videoContainer = document.getElementById("jsVideoPlayer");
let videoPlayer; 
const playButton = document.getElementById("jsPlayButton");
const volumeButton = document.getElementById("jsVolumeButton");
const fullScreenButton = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");
const videoPlayerControl = document.getElementById("jsVideoPlayerControls");

function init()
{
    videoPlayer = videoContainer.querySelector("#jsVideoPlayer video");
    videoPlayer.volume = 0.5;
    playButton.addEventListener("click",handlePlayClick);
    volumeButton.addEventListener("click",handleVolumeClick);
    fullScreenButton.addEventListener("click",goFullScreenClick);
    videoPlayer.addEventListener("loadeddata",setTotalTime);
    volumeRange.addEventListener("input",handleDrag);
    videoPlayerControl.addEventListener("mouseover",()=>{volumeRange.style.opacity=0.9});
    videoPlayerControl.addEventListener("mouseout",()=>{volumeRange.style.opacity=0});
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
        volumeRange.value = videoPlayer.volume;
        videoPlayer.muted = false;
        volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    else
    {
        volumeRange.value = 0;
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

const formatTime = seconds =>
{
    const secondsNumber = parseInt(seconds,10);
    let hours = Math.floor(secondsNumber/3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber  - hours * 3600 - minutes * 60;

    if(hours < 10) hours = `0${hours}`;
    if(minutes < 10) minutes = `0${minutes}`;
    if(totalSeconds < 10) totalSeconds = `0${totalSeconds}`;
    if(hours === "00") return `${minutes}:${totalSeconds}`;
    return `${hours}:${minutes}:${totalSeconds}`;

}

function setTotalTime()
{
    console.log(videoPlayer.duration)
    const totalTimeString = formatTime(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime,1000);
}

function getCurrentTime()
{
    currentTime.innerHTML = formatTime(videoPlayer.currentTime);
    if(videoPlayer.currentTime ===videoPlayer.duration)
    {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        videoPlayer.currentTime = 0;
        registerView();
    } 
}

function handleDrag(event)
{
    const {target:{value}} = event;
    videoPlayer.volume = value;
    if(value > 0.6)
    {
        volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    else if(value > 0.2)
    {
        volumeButton.innerHTML = '<i class="fas fa-volume-down"></i>';
    }
    else
    {
        volumeButton.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

const registerView = () =>
{
    const videoId = window.location.href.split("/videos/")[1];
    fetch(`/api/${videoId}/view`,{method:"POST"});
}