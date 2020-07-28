const postModel = require('../models/post')

function validateId(req, res, next) {
  let { id } = req.params;
  //normally a separate function for variable type 
  //transforming is needed and necessary
  id = Number(id);
  if(postModel.getPostIndexById(id) === -1) {
    return res.sendStatus(404);
  }
  req.params.id = id;
  next();
}

module.exports = { validateId };