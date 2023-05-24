$(document).ready(function(){
    $(".form").submit(function(e){
        e.preventDefault(); // prevent form from submitting normally
        submitEdit();
    })
})

function fillEditForm() {
    let post_id = localStorage.getItem('postid');
    let post = JSON.parse(localStorage.getItem('postArray')).posts[post_id - 1];

    document.getElementById("title").value = post.title;
    document.getElementById("content").value = post.content;
}

function submitEdit() {
    let postArray = JSON.parse(localStorage.getItem("postArray"));
    let parent = localStorage.getItem("postid");

    // get values from form
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    // create new post object
    let date = Date.now();
    const d = new Date(date);

    let parent_post = postArray.posts[parent - 1];
    parent_post.edits.push((postArray.posts.length + 1).toString());

    let post = {
        id: (postArray.posts.length + 1).toString(),
        user: "Guilherme Claro",
        title: title,
        content: content,
        date: d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear(),
        score: "0",
        parent: parent,
        edits: parent_post.edits
    };

    postArray.posts.push(post);
    let newPostArray = JSON.stringify(postArray);

    // add post to array
    localStorage.setItem("postArray", newPostArray)

    localStorage.setItem("postid", post.id);
    window.location.href = 'post.html'
}
