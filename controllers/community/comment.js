import Comment from '../../models/community/comment.js'
import Post from '../../models/community/post.js'

export const createComment = async (req, res, next) => {
  const userID = req.userId
  const postID = req.body.postID
  const newComment = new Comment({ ...req.body, userID })
  try {
    const comment = await newComment.save()
    await Post.findByIdAndUpdate(postID, { $push: { comments: comment._id } }, { new: true })
    res.status(200).json({ message: 'Comment created successfully', data: comment })
  } catch (error) {
    next(error)
  }
}

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 })
    res.status(200).json(comments)
  } catch (error) {
    next(error)
  }
}

export const getComment = async (req, res, next) => {
  const commentID = req.params.commentID
  try {
    const comment = await Comment.findById(commentID)
    res.status(200).json(comment)
  }
  catch (error) {
    next(error)
  }
}

export const updateComment = async (req, res, next) => {
  const commentID = req.params.commentID
  try {
    const comment = await Comment.findByIdAndUpdate(commentID, req.body, { new: true })
    res.status(200).json({ message: 'Comment updated successfully', data: comment })
  }
  catch (error) {
    next(error)
  }
}

export const deleteComment = async (req, res, next) => {
  const commentID = req.params.commentID
  const postID = req.body.postID
  try {
    await Comment.findByIdAndDelete(commentID)
    await Post.findByIdAndUpdate(postID, { $pull: { comments: commentID } }, { new: true })
    res.status(200).json({ message: 'Comment deleted successfully' })
  }
  catch (error) {
    next(error)
  }
}
