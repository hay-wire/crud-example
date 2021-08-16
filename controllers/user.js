const User = require('../models/user');

// get
exports.get = async function(req, res) {
  const users = await User.getUsers();
  res.json({
    ok: true,
    errors: [],
    data: users
  });
}

// create
exports.create = async function(req, res) {
  const user = await User.createUser(req.body);
  res.json({
    ok: true,
    errors: [],
    data: user
  });
}

// update
exports.update = async function(req, res){
  const updateResult = await User.updateUser(req.body._id, req.body.updateObj);
  res.json({
    ok: true,
    errors: [],
    data: updateResult
  });
}


// delete
exports.delete = async function(req, res) {
  const deleteResult = await User.deleteUser(req.body._id);
  res.json({
    ok: true,
    errors: [],
    data: deleteResult
  });
}

