"use strict";

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./middleware/auth");
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");
const monsterRoutes = require("./routes/monsters")
const characterRoutes = require("./routes/characters")

const app = express();

// cross-origin reference sharing middleware
app.use(cors());

// allows express to recognize incoming req as JSON
app.use(express.json());

// allows us to process the body of POST, PUT and PATCH reqs
app.use(express.urlencoded({ extended: true}))

// auth middle-ware
app.use(authenticateJWT);

/** routes related to user auth */
// app.use("/auth", authRoutes);

/** routes for getting user info and account deletion */
// app.use("/users", userRoutes);

/** Routes that get recipe info from Spoontacular API and manage user recipes */
app.use("/monsters", monsterRoutes);
app.use("/characters", characterRoutes);





/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;