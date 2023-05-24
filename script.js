var posts = []; // array to store posts

function newTutorialButton(){
  localStorage.setItem('postid', 0);

  window.location.href = 'submit.html'
}

function editButton(){
  let title = document.getElementById('post-title').innerHTML;
  let content = document.getElementById('post-content').innerHTML;

  localStorage.setItem('edit-title', title);
  localStorage.setItem('edit-content', content);

  window.location.href = 'edit.html'
}

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

  let edits = [];
  let ancestors = [];
  if(parent > '0') {
    edits = postArray.posts[parent].edits // new Array(postArray.posts[parent].edits);
    ancestors = edits.slice(0, -1);
  }

  for(let i in ancestors){
    postArray[i].edits.push(postArray.length + 1);
  }

  let post = {
    id: (postArray.posts.length + 1).toString(),
    user: "Guilherme Claro",
    title: title,
    content: content,
    date: d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear(),
    score: "0",
    parent: parent,
    edits: [postArray.posts.length + 1].concat(edits)
  };

  postArray.posts.push(post);
  let newPostArray = JSON.stringify(postArray);

  // add post to array
  localStorage.setItem("postArray", newPostArray)

  localStorage.setItem("postid", post.id);
  window.location.href = 'post.html'
}

function getPosts(event){
  var arrayAsString = localStorage.getItem('posts');

  // convert the string back to an array
  var posts = JSON.parse(arrayAsString);
}

function displayLastPost() {
  // retrieve the string from local storage
  var storedPosts = localStorage.getItem('posts');

  // parse the string into an array
  var posts = JSON.parse(storedPosts);

  // get the last item in the array
  var lastPost = posts[posts.length - 1];

  // update the HTML elements with the last post's title and content
  document.getElementById('post-title').textContent = lastPost.title;
  document.getElementById('post-content').textContent = lastPost.content;
}

function filterFunction() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  var elements = document.getElementsByTagName("*");
  for (i = 0; i < elements.length; i++) {
    txtValue = elements[i].textContent || elements[i].innerText;
    if (elements[i].id === "navbar" || elements[i].closest("#navbar")){
      // Skip filtering for the nav-bar
      continue;
    }
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "";
    } else {
      elements[i].style.display = "none";
    }
  }
}

function filter() {
  var input = document.getElementById("myInput");
  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      filterFunction();
    }
  });
}