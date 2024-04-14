import express from "express";

import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../../controllers/community/post.js";

const router = express.Router();

router.post("/createNewPost", checkFields, VerifyToken, createPost);
router.get("/getCommunityPosts", getAllPosts);
router.get("/:postID", getPost);
router.put("/:postID", checkFields, VerifyToken, updatePost);
router.delete("/:postID", VerifyToken, deletePost);

export default router;
