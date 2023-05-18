$(window).on('load', function () {
   getPost();
});

function getPost(){
    $.getJSON('/content/posts/posts.json', function (postArray){

        console.log(JSON.stringify(postArray));
        let id = parseInt(localStorage.getItem('postid'));

        for(let i = 0; i < postArray.posts.length; i++) {
            let post = postArray.posts[i];
            console.log(post);
            if (post.id === id) {
                document.getElementById("post-title").innerText = post.title;
                document.getElementById("post-content").innerText = post.content;
                document.getElementById("date").innerText = post.date;
                document.getElementById("author").innerText = post.user;
                document.getElementById("score").innerText = post.score;
                // get post history
                let ul_history = document.getElementById("edit-history");
                let li = document.createElement("li");
                for(i in post.edits){
                    let temp = postArray.posts[i];
                    li.appendChild(document.createTextNode(temp.date + " by " + temp.user))
                    ul_history.appendChild(li)
                }
            }
        }
    });

}