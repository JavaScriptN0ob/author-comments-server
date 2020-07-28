/*
declare all models.
*/
const post = [];
let currentId = 1;

/*
followed by all functions 
which interacted with these variables.
*/

function getAllPosts() {
  // return post;

  // as any function uses getAllPosts could read post[] variables,
  // in this case, a deep copy is necessary to post[] variables
  // avoiding other functions' read.
  return JSON.parse(JSON.stringify(post));
}

function addPost(postByUser) {
  // destructing postByUser and adding new id to the post
  const newPost = {...postByUser, id: currentId++}
  post.push(newPost);
  return newPost;
}

function getPostById(idInput) {
  const postFound = post.find((postByUser) => (postByUser.id === idInput));
  return postFound;
}

// check if id exist
function getPostIndexById(idInput) {
  const postIndex = post.findIndex((postByUser) => (postByUser.id === idInput));
  return postIndex;
}

function updatePostById(idInput, updatePost) {
  const postIndex = getPostIndexById(idInput);
  const userUpdatePost = {...updatePost, idInput};
  post[postIndex] = userUpdatePost;
  return userUpdatePost;
}

function deletePostById(idInput) {
  const postIndex = getPostIndexById(idInput);
  const deletedPost = post.splice(postIndex, 1);
  return deletedPost;
}

module.exports = { 
  getAllPosts, 
  addPost, 
  getPostById, 
  getPostIndexById, 
  updatePostById, 
  deletePostById
};