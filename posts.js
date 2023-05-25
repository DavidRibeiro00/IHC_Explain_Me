$(document).ready(function () {
   getPost();
});

function getPost(){
    let postArray = JSON.parse(localStorage.getItem("postArray"))
    let id = parseInt(localStorage.getItem('postid'));

    let post = postArray.posts[id - 1];
    console.log(post);
    document.getElementById("post-title").innerText = post.title;
    document.getElementById("post-content").innerText = post.content;
    document.getElementById("date").innerText = post.date;
    document.getElementById("author").innerText = post.user;
    document.getElementById("score").innerText = post.score;
    // get post history
    let ul_history = document.getElementById("edit-history");
    post.edits.forEach(element => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let temp = postArray.posts[element - 1];
        let a = document.createElement("a")

        a.href = 'post.html';
        a.className = '' + element;
        li.onclick = function (){
            localStorage.setItem('postid', a.className);
            window.location = 'post.html'
        }
        p.className = "edit-history";
        p.innerText = temp.date + " by " + temp.user + "\n";
        li.appendChild(p);
        li.appendChild(a);
        ul_history.appendChild(li);
    });
}

