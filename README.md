# REST API

## API

* Application Programming Interface
* Contract provided by one piece of software to another
* Structured request and response

## REST

* Representational State Transfer
* Architecture style for designing networked applications
* Relies on a stateless, client-server protocol, almost always HTTP
* Treats server objects as resources that can be created or destroyed
* Can be used by virtually any programming language
* All APIS have their own rules and structure

## HTTP Requests

* GET: Retrieve data from a specified resource
* POST: Submit data to be processed to a specified resource
* PUT: Update a specified resource
* DELETE: Delete a specified resource

* HEAD: Same as get but does not return a body
* OPTIONS: Returns the supported HTTP methods
* PATCH: Update partial resources

## Common API Endpoints

GET     https://example.com/api/users       //get all users
GET     https://example.com/api/users/1     //get single user
POST    https://example.com/api/users       //Add user
PUT     https://example.com/api/users/1     //Update user
DELETE  https://example.com/api/users/1     //Delete user


## examples with sync and async

Sync
```
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

function createPost() {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPost() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post three',
  body: 'This is post three'
});

getPost();

```
function that can be passed to another function
```
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
```