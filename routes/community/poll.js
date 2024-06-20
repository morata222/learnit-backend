import express from "express";

import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createPoll,
  deletePoll,
  getAllPolls,
  getPoll,
  updatePoll,
} from "../../controllers/community/poll.js";

const router = express.Router();

router.post("/create", checkFields, createPoll);
router.get("/all", getAllPolls);
router.get("/:pollID", getPoll);
router.put("/:pollID", checkFields, updatePoll);
router.delete("/:pollID", deletePoll);

export default router;
