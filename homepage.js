$(document).ready(function(){
    $.getJSON('/content/posts/posts.json', function (postArray){
        if(localStorage.getItem("jsonflag") != "1"){
            localStorage.setItem("postArray", JSON.stringify(postArray));
            localStorage.setItem("jsonflag", "1")
        }
    })
})