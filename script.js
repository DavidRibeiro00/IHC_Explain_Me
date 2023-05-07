var posts = []; // array to store posts
  
function submitForm(event) {
  event.preventDefault(); // prevent form from submitting normally

  // get values from form
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;

  // create new post object
  var post = {
    title: title,
    content: content
  };

  // add post to array
  posts.push(post);

  // do something with posts array (e.g. update UI)
  console.log(posts);
  var arrayAsString = JSON.stringify(posts);

  // save the string in local storage
  localStorage.setItem('posts', arrayAsString);

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

