const User = require("../models/user");
const userController = {};

userController.saveUser = async (userName, password, sid) => {
  let user = await User.findOne({ name: userName });

  if (!user) {
    user = new User({
      name: userName,
      pwd: password,
      token: sid,
      online: true,
    });
  }

  if (user.pwd !== password) {
    return false;
  }

  user.token = sid;
  user.online = true;

  await user.save();
  return user;
};

module.exports = userController;
