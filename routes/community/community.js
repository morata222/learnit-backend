import express from "express";

import {
  createNewCommunity,
  deleteCommunity,
  getAllCommunities,
  getCommunity,
  updateCommunityInfo,
  joinCommunity,
} from "../../controllers/community/communtiy.js";

const router = express.Router();

router.post("/createNewCommunity", createNewCommunity);
router.put("/joinCommunity", joinCommunity);
router.get("/getAllCommunities", getAllCommunities);
router.get("/:communityID", getCommunity);
router.put("/:communityID", updateCommunityInfo);
router.delete("/:communityID", deleteCommunity);

export default router;
