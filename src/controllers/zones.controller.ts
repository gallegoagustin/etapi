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

import { Zone } from "../models/Zone";

const get = catchAsync(async (req: any, res: any) => {
  const zones = await Zone.find();

  if (!zones.length) {
    return res.status(httpStatus.OK).json({ zones: [] });
  }

  res.status(httpStatus.OK).json({ zones });
});

const post = catchAsync(async (req: any, res: any) => {
  const { country, city, state, zone, coords, rate, averageValue } = req.body;

  const zoneData = {
    country: country,
    state: state,
    city: city,
    zone: zone,
    centerCoordinates: coords,
    rate: rate,
    averageValue: averageValue,
  };

  const existing = await Zone.find({
    where: {
      data: zoneData,
    },
  });

  if (existing.length) {
    return res.status(httpStatus.OK).json("Zone already exists");
  }

  const newZone = new Zone();

  newZone.data = { ...zoneData };

  await newZone.save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  res.status(httpStatus.OK).json(newZone);
});

module.exports = {
  get,
  post,
};
