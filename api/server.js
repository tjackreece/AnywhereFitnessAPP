const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

// const authRouter = require("./auth/auth-router");
// const userRouter = require("./user/user-router");

// server.use("/api/v1/auth", authRouter);
// server.use("/api/v1/user", userRouter);

module.exports = server;
