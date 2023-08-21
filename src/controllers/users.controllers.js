import User from "../models/user";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Failed to get users.",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      message: "New user created succesfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to create new user.",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "User not found.",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId, req.body);
    res.status(200).json({
      message: "User updated succesfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to update user.",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Failed to delete user.",
    });
  }
};
