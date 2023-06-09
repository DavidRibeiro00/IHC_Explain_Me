$(document).ready(function(){
    $(".form").submit(function(e){
        localStorage.setItem('postid', '0')
        e.preventDefault(); // prevent form from submitting normally
        submitForm();
    })
})

function submitForm() {
    let postArray = JSON.parse(localStorage.getItem("postArray"));
    let parent = '0';

    // get values from form
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    // create new post object
    let date = Date.now();
    const d = new Date(date);

    let edits = [(postArray.posts.length + 1).toString()];

    let post = {
        id: (postArray.posts.length + 1).toString(),
        user: "Guilherme Casal",
        title: title,
        content: content,
        date: d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear(),
        score: "0",
        parent: parent,
        edits: edits
    };

    postArray.posts.push(post);
    let newPostArray = JSON.stringify(postArray);

    // add post to array
    localStorage.setItem("postArray", newPostArray)

    localStorage.setItem("postid", post.id);
    window.location.href = 'post.html'
}
