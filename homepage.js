$(document).ready(function(){
    $.getJSON('/content/posts/posts.json', function (postArray){
        if(localStorage.getItem("jsonflag") !== "1"){
            localStorage.setItem("postArray", JSON.stringify(postArray));
            localStorage.setItem("jsonflag", "1")
        }
        let localArray = JSON.parse(localStorage.getItem('postArray'));
        if(postArray.posts.length === localArray.posts.length){
            let post = document.getElementById('post-title').parentElement.parentElement.parentElement;
            post.style.display = 'none';
        }
        else{
            let post_id = localStorage.getItem('postid');

            let post = document.getElementById('post-title').parentElement;
            let children = Array.from(post.children);
            children.forEach(element => {
                if($(element).attr('id') === 'post-title'){
                    element.innerText = localArray.posts[post_id - 1].title;
                }
                if($(element).attr('id') === 'post-content'){
                    element.innerText = localArray.posts[post_id - 1].content;
                }
            });
        }
    })
})