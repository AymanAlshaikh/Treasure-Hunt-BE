const bcrypt = require("bcrypt");
const { Users } = require("../db/models/User");

exports.signUp = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashedPassowrd = await bcrypt.hash(password, 10);
    req.body.password = hashedPassowrd;
    newUser = await Users.create(reeq.body);
    res.json(newUser);
    res.status(201);
  } catch (error) {
    next(error);
  }
};

exports.signIn = async (req, res, next) => {
  const { user } = req;
  const payload = {
    id: user.id,
    username: user.username,
    password: user.password,
    email: user.email,
    exp: Date.now() + 6000000,
  };
  const token = jwt.sign(JSON.stringify(payload), "secretkey");
  res.json({ token });
};