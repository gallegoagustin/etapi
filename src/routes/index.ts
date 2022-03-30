export {};
const express = require("express");
const router = express.Router();
const config = require("../config/config");

// Import routes
const zonesRoute = require("./zones.route");
const locationsRoute = require("./locations.route");
const roomRoute = require("./room.route");
const image3dRoute = require("./image3d.route");
const authRoute = require("./auth.route");
const calculatorRoute = require("./calculator.route");
const reviewsRoute = require("./reviews.route");
const publicationsRoute = require("./publications.route");

// Create routing
const defaultRoutes = [
  {
    path: "/zones",
    route: zonesRoute,
  },
  {
    path: "/locations",
    route: locationsRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/calculator",
    route: calculatorRoute,
  },
  {
    path: "/room",
    route: roomRoute,
  },
  {
    path: "/image3d",
    route: image3dRoute,
  },
  {
    path: "/reviews",
    route: reviewsRoute,
  },
  {
    path: "/publications",
    route: publicationsRoute,
  },
];

const devRoutes: any[] = [
  // routes available only in development mode
  // {
  //     path: '/docs',
  //     route: docsRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

if (config.version) {
  router.get("/version", function (req: any, res: any) {
    res.status(200).json({ version: config.version });
  });
}

module.exports = router;
