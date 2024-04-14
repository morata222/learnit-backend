import Community from "../../models/community/community.js";

export const createNewCommunity = async (req, res, next) => {
  const newCommunity = new Community(req.body);
  try {
    const community = await newCommunity.save();
    res.status(200).json(community);
  } catch (error) {
    next(error);
  }
};
export const joinCommunity = async (req, res, next) => {
  const { communityID, userID } = req.body;
  try {
    const community = await Community.findByIdAndUpdate(
      communityID,
      { $addToSet: { members: userID } },
      { new: true }
    );
    res.status(200).json(community);
  } catch (error) {
    next(error);
  }
}
export const getCommunity = async (req, res, next) => {
  const communityID = req.params.communityID;
  try {
    const community = await Community.findById(communityID);
    res.status(200).json(community);
  } catch (error) {
    next(error);
  }
};
export const getAllCommunities = async (req, res, next) => {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (error) {
    next(error);
  }
};

export const updateCommunityInfo = async (req, res, next) => {
  const communityID = req.params.communityID;
  try {
    const community = await Community.findByIdAndUpdate(communityID, req.body, {
      new: true,
    });
    res.status(200).json(community);
  } catch (error) {
    next(error);
  }
};
export const deleteCommunity = async (req, res, next) => {
  const communityID = req.params.communityID;
  try {
    const community = await Community.findByIdAndDelete(communityID);
    res
      .status(200)
      .json({ message: "Community deleted successfully", data: community });
  } catch (error) {
    next(error);
  }
};
