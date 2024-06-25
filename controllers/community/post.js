import Post from "../../models/community/post.js";
import Community from "../../models/community/community.js";

export const createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const post = await newPost.save();
    await Community.findByIdAndUpdate(
      req.body.communityID,
      { $push: { posts: post._id } },
      { new: true }
    );
    res.status(200).json({ message: "Post created successfully", data: post });
  } catch (error) {
    next(error);
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort posts by createdAt in descending order
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  const {postID} = req.params;
  try {
    const post = await Post.findById(postID).populate("comments");
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  const {postID} = req.params;
  try {
    const post = await Post.findByIdAndUpdate(postID, req.body, { new: true });
    res.status(200).json({ message: "Post updated successfully", data: post });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  const postID = req.params.postID;
  try {
    const post = await Post.findByIdAndDelete(postID);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await Community.findByIdAndUpdate(
      post.communityID,
      { $pull: { posts: postID } },
      { new: true }
    );
    res.status(200).json({ message: "Post deleted successfully", data: post });
  } catch (error) {
    next(error);
  }
};
