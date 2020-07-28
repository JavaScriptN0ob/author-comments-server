const postModel = require('../models/post');

function getAllPost(req, res) {
  const allPosts = postModel.getAllPosts();
  return res.json(allPosts);
}

function getPostById(req, res) {
  const { id } =  req.params;
  const postFound = postModel.getPostById(id);
  return res.json(postFound);
}

function addPost(req, res) {
  const { author, content } = req.body;
  const newPost = postModel.addPost({
    author,
    content
  });
  res.status(201).json(newPost);
}

function updatePostById(req, res) {
  const { id } = req.params;
  const { author, content } = req.body;
  const updatedPost = postModel.updatePostById(id, { author, content });
  return res.json(updatedPost);
}

function deletePostById(req, res) {
  const { id } = req.params;
  const deletedPost = postModel.deletePostById(id);
  return res.json(deletedPost);
}

module.exports = {
  getAllPost,
  getPostById,
  addPost,
  updatePostById,
  deletePostById
};