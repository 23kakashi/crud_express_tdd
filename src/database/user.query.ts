import { Knex } from "knex";
import knex from "../config/db";

export const registerUser = (
  username: string,
  password: string
): Knex.QueryBuilder => {
  return knex("userdb").insert({ username, password });
};

export const getAllUser = (): Knex.QueryBuilder => {
  return knex("userdb").select("*");
};

// const newError = new Error()
