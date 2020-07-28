// (src/routes.js) is similar to src/routes/index.js
// As when import a folder, Js will find -> folder/index.js first.

const express = require('express');
const router = express.Router();
const postRoute = require('./routes/post');

router.use('/posts', postRoute);

module.exports = router;