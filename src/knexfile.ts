// import * as path from "path";
import path from "path";
// import * as dotenv from "dotenv";
require("dotenv").config();

export default {
  development: {
    client: "pg",
    connection:
      "postgres://wlvrnqyn:yf5xexuTkWx6zFIlZa7ivfUbsdOBTu1n@tiny.db.elephantsql.com/wlvrnqyn",
    // connection: process.env.CONNECTION_STRING,
    migrations: {
      directory: path.join(__dirname, "config", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "config", "seeds"),
    },
  },
  // testing: {
  //   client: "pg",
  //   connection: process.env.DB_URL,
  //   migrations: {
  //     directory: "./data/migrations",
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, "data/seeds"),
  //   },
  // },
  // production: {
  //   client: "pg",
  //   connection: process.env.DB_URL,
  //   migrations: {
  //     directory: "./data/migrations",
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, "data/seeds"),
  //   },
  // },
};
