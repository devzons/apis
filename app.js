const posts = [
  {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post two',
    body: 'This is post two'
  }
];

// function createPost() {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({
//   title: 'Post three',
//   body: 'This is post three'
// });

// getPost();

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'}, getPosts);

getPost();
