import express from "express";

import { getAllUsers , getMonthlyRanking } from "../../controllers/user/leaderboard.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/monthly", getMonthlyRanking);

export default router;
