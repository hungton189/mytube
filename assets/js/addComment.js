const addCommentContainer = document.getElementById("jsAddComment");
let commentsNumber;
let listComment;
import axios from "axios";

const sendComment = async comment =>
{
    const videoId = window.location.href.split("/videos/")[1];
    const newComment = await axios({
        url:`/api/${videoId}/addComment`,
        method: 'POST',
        data:{
            comment
        }
    });
    increaseNumber();
    addComment(comment);
}

const increaseNumber = ()=>
{
    commentsNumber.innerHTML = parseInt(commentsNumber.innerHTML, 10)+1;
}

const addComment = (comment) => 
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    listComment.prepend(li);
}

const handleSubmit = (event) => 
{
    event.preventDefault(); //dành quyền kiểm soát form, không cho form gửi đi
    const commentInput = addCommentContainer.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

function init()
{
    addCommentContainer.addEventListener("submit", handleSubmit);
    commentsNumber = document.getElementById("jsCommentsNumber");
    listComment = document.getElementById("jsListComment");
}

if(addCommentContainer)
{
    init();
}