import generateJWT from "../helpers/token-sign";
import User from "../models/user";
import bcrypt from "bcrypt";

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
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        message: "The email adress is already registered.",
      });
    }
    const newUser = new User(req.body);
    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(req.body.password, salt);
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

export const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "Incorrect email or password." });
    }
    const invalidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!invalidPassword) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }
    const token = await generateJWT(user.username);
    res.status(200).json({
      message: "El usuario es correcto",
      username: user.username,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error al intentar loguear un user",
    });
  }
};
