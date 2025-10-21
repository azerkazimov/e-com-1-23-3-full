const userModel = require("../model/user.model");

const getUserHandler = async (req, res) => {
  try {
    console.log('Getting user profile for:', req.user);

    const user = await userModel.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ data: user });
  } catch (error) {
    console.error("Can't find user", error);
    res.status(500).json({ message: "Server error" });
  }
};

const patchUserHandler = async (req, res) => {
  try {
    const { bio, avatarUrl, sosialLinks } = req.body;

    const user = await userModel
      .findByIdAndUpdate(
        req.user.userId,
        { bio, avatarUrl, sosialLinks },
        { new: true }
      )
      .select("-password");

    res.json({ data: user });
  } catch (error) {
    console.error("Can't update user", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.user.userId);
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error("Can't delete user", error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  getUserHandler,
  patchUserHandler,
  deleteUserHandler,
};
