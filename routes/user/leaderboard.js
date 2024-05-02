import express from "express";

import { getAllUsers } from "../../controllers/user/leaderboard.js";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
