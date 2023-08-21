import Post from "../models/post";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username");
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

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate("userId", "username");
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Post not found.",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndUpdate(postId, req.body);
    res.status(200).json({
      message: "Post updated succesfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to update post.",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({
      message: "Post deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Failed to delete post.",
    });
  }
};
