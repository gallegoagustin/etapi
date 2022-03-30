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
import { Location } from "../models/Location";
import calculateValue from "../utils/calculator";

const post = catchAsync(async (req: any, res: any) => {
  const { locationId, zoneId, time, expectedValue } = req.body
  
  const zone = await Zone.find({
      where: {
          id: zoneId
      }
  });

  if(!zone.length) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Could not find zone');
  }

  const location = await Location.find({
    where: {
        id: locationId
    }
  });

  if(!location.length) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Could not find location');
  }

  let calcParams = {
      zoneData: zone[0].data,
      locationData: location[0],
      time: time,
      expectedValue: expectedValue,
  }


  const result = await calculateValue(calcParams);

  location[0].suggestedValue = result;
  location[0].expectedValue = expectedValue;

  await location[0].save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  res.status(httpStatus.OK).json(result);
});

module.exports = {
  post
};
