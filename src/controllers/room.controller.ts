export {};
/** Node Modules */
const httpStatus = require("http-status");

/** Custom Modules */
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");

import { Room } from "../models/Room";
import { Location } from "../models/Location";

const get = catchAsync(async (req: any, res: any) => {
  const rooms = await Room.find({
    relations: ["location"],
  });

  if (!rooms.length) {
    return res.status(httpStatus.OK).json({ rooms: [] });
  }

  res.status(httpStatus.OK).json({ rooms });
});

const post = catchAsync(async (req: any, res: any) => {
  const { name, image, squareMeter, locationId } = req.body;

  const location = await Location.findOne({
    where: { id: locationId },
    relations: ["owner"],
  });

  if (!location) {
    return res
      .status(httpStatus.NO_CONTENT)
      .json({ message: "location not found" });
  }

  if (location.owner.id !== req.currentUser.id) {
    return res
      .status(httpStatus.FORBIDDEN)
      .json({ message: "You are not the owner" });
  }

  const newRoom = new Room();
  newRoom.name = name;
  newRoom.image = image;
  newRoom.squareMeter = squareMeter;
  newRoom.location = locationId;

  await newRoom.save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  res.status(httpStatus.OK).json(newRoom);
});

module.exports = {
  get,
  post,
};
