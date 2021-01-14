const recorderContainer = document.getElementById("jsRecorderContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoUploadPreview");

let videoRecorder;
let streamObject;

function init() 
{
    recordBtn.addEventListener("click", getVideo);
}

const handleVideoData = (event) => 
{
    const {data:videoFile} = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorderMyTube";
    document.body.appendChild(link);
    link.click();
}

const startRecording = ()=>
{
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable",handleVideoData);
    recordBtn.removeEventListener("click", getVideo);
    recordBtn.addEventListener("click", stopRecording);
}

const stopRecording = () =>
{
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.innerHTML = "Start recording";
    recordBtn.addEventListener("click", getVideo);
} 

const getVideo = async()=>
{
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true
        });
        videoPreview.srcObject = stream;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording();
    } catch (error) {
        recordBtn.innerHTML = "Sorry! Can't recording."
    }
    finally
    {
        recordBtn.removeEventListener("click", startRecording);
    }
}

if(recorderContainer)
{
    init();
}