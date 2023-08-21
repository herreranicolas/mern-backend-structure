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
    res.status(404).json({
      message: "Failed to create new user.",
    });
  }
};
