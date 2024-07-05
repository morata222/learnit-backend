import Poll from "../../models/community/poll.js";
import Community from "../../models/community/community.js";

export const createPoll = async (req, res, next) => {
  const newPoll = new Poll(req.body);
  try {
    const poll = await newPoll.save();
    await Community.findByIdAndUpdate(
      req.body.communityID,
      { $push: { polls: poll._id } },
      { new: true }
    );
    res.status(200).json({ message: "Poll created successfully", data: Poll });
  } catch (error) {
    next(error);
  }
};

export const getAllPolls = async (req, res, next) => {
  try {
    const polls = await Poll.find().sort({ createdAt: -1 }).populate("userID");
    res.status(200).json(polls);
  } catch (error) {
    next(error);
  }
};

export const getPoll = async (req, res, next) => {
  const {PollID} = req.params;
  try {
    const poll = await Poll.findById(PollID).populate("comments").populate("userID");
    // I want to get poll in reverse order
    
    res.status(200).json(poll);
  } catch (error) {
    next(error);
  }
};

export const updatePoll = async (req, res, next) => {
  const {pollID} = req.params;
  try {
    const poll = await Poll.findByIdAndUpdate(pollID, req.body, { new: true });
    res.status(200).json({ message: "Poll updated successfully", poll });
  } catch (error) {
    next(error);
  }
};

export const deletePoll = async (req, res, next) => {
  const {pollID} = req.params;
  try {
    const poll = await Poll.findByIdAndDelete(pollID);
    if (!Poll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    await Community.findByIdAndUpdate(
      Poll.communityID,
      { $pull: { polls: pollID } },
      { new: true }
    );
    res.status(200).json({ message: "Poll deleted successfully",  poll });
  } catch (error) {
    next(error);
  }
};
