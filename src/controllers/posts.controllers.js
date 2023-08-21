import Post from "../models/post";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Failed to get posts.",
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newPost = new Post({
      title,
      content,
      userId,
    });
    await newPost.save();
    res.status(201).json({
      message: "New post created succesfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Failed to create new post.",
    });
  }
};
