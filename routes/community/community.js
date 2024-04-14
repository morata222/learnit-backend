import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createNewCommunity,
  deleteCommunity,
  getAllCommunities,
  getCommunity,
  updateCommunityInfo,
  joinCommunity,
} from "../../controllers/community/communtiy.js";

const router = express.Router();

router.post(
  "/createNewCommunity",
  checkFields,
  VerifyToken,
  createNewCommunity
);
router.put("/joinCommunity", VerifyToken, joinCommunity);
router.get("/getAllCommunities", getAllCommunities);
router.get("/:communityID", getCommunity);
router.put("/:communityID", VerifyToken, updateCommunityInfo);
router.delete("/:communityID", VerifyToken, deleteCommunity);

export default router;
