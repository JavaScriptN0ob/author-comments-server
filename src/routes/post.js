const express = require('express');
const postController = require('../controllers/post');
const { validateId } = require('../middlewares/validateId');
const router = express.Router();

// space below = localhost:1000/posts
router.get('', postController.getAllPost);
router.get('/:id', validateId, postController.getPostById);
router.post('', postController.addPost);
router.put('/:id', validateId, postController.updatePostById);
router.delete('/:id', validateId, postController.deletePostById);

module.exports = router;