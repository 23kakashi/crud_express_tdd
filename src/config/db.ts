import pg from "pg";

const conString = process.env.CONNECTION_STRING;

export const client = new pg.Client(conString);
