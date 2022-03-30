export {};
/** Node Modules */
const httpStatus = require("http-status");

/** Custom Modules */
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const pick = require("../utils/pick");
import { getConnection, getRepository } from "typeorm";
/** Schemas */
import { createQueryBuilder } from "typeorm";

import { Location } from "../models/Location";

const get = catchAsync(async (req: any, res: any) => {
  const locations = await Location.find({
    relations: ["zone", "owner", "roomsDetails", "images3D"],
    where: { isActive: true },
  });

  if (!locations.length) {
    return res.status(httpStatus.OK).json({ locations: [] });
  }

  res.status(httpStatus.OK).json({ locations });
});

const post = catchAsync(async (req: any, res: any) => {
  const {
    name,
    address,
    zone,
    rooms,
    bathrooms,
    painting,
    floor,
    user,
    imageUrl,
    email,
    phone,
    description,
  } = req.body;

  const existing = await Location.find({
    where: {
      name: name,
      address: address,
      zone: zone,
      rooms: rooms,
      bathrooms: bathrooms,
      painting: painting,
      floor: floor,
    },
    relations: ["zone"],
  });

  if (existing.length) {
    return res
      .status(httpStatus.METHOD_NOT_ALLOWED)
      .json("Location already exists");
  }

  const newLocation = new Location();
  newLocation.name = name;
  newLocation.address = address;
  newLocation.zone = zone;
  newLocation.rooms = rooms;
  newLocation.bathrooms = bathrooms;
  newLocation.painting = painting;
  newLocation.floor = floor;
  newLocation.isActive = false;
  newLocation.value = 0;
  newLocation.owner = user;
  newLocation.image = imageUrl;
  newLocation.email = email;
  newLocation.phone = phone;
  newLocation.description = description;

  await newLocation.save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  res.status(httpStatus.OK).json(newLocation);
});

const updateLeaseRange = catchAsync(async (req: any, res: any) => {
  const { start, end, locationId } = req.body;

  const location = await Location.findOne({ id: locationId });

  if (!location) {
    return res
      .status(httpStatus.NO_CONTENT)
      .json({ response: "No location found" });
  }

  location.startLease = start;
  location.endLease = end;

  await location.save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });
  res.status(httpStatus.OK).json(location);
});
module.exports = {
  get,
  post,
  updateLeaseRange,
};
