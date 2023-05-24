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
  document.getElementById("title").value = localStorage.getItem("edit-title");
  document.getElementById("content").value = localStorage.getItem("edit-content");
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