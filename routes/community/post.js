import express from "express";

import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
  deleteAllPosts
} from "../../controllers/community/post.js";

const router = express.Router();

router.post("/create", checkFields, createPost);
router.get("/all", getAllPosts);
router.delete("/deleteAll", deleteAllPosts)
router.get("/:postID", getPost);
router.put("/:postID", checkFields, updatePost);
router.delete("/:postID", deletePost);

export default router;
