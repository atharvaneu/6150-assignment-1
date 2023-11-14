const express = require("express");
const User = require("../models/user");
const { Mongoose } = require("mongoose");
const router = new express.Router();

// POST: /user/create – User creation with a meaningful message if the user email or password is invalid)
router.post("/user/create", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

// PUT: /user/edit – Add validations for full name and password
router.patch("/user/edit", async (req, res) => {
  try {
    const filter = req.body.filter;
    const update = req.body.update;

    // update the user
    await User.findOneAndUpdate(filter, update);

    const updatedUser = await User.find(filter);
    res.status(200).send(updatedUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

// DELETE: /user/delete
router.delete("/user/delete", async (req, res) => {
  try {
    const user = await User.deleteOne({
      email: req.body.email,
    });

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// GET: /user/getAll
router.get("/user/getAll", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }

});
// POST: /user/login
router.post("/user/login", async (req,res) => {
  const {email,password} = req.body;
  const {user,errMsg} = await User.findByCredentials(email,password);

  if (errMsg===null) {
    res.send({user, errMsg: null}).status(200);
  }
  else if (errMsg==="USER_NOT_EXIST") {
    res.send({user:null, errMsg}).status(404);
  }
  else if (errMsg==="PASSWORD_NOT_MATCH") {
    res.send({user:null,errMsg}).status(401);
  }
})

module.exports = router;
