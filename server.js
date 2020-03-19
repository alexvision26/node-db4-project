const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/api/recipes", (req, res) => {
  res.status(200).json({ api: "recipes working" });
});

module.exports = server;
