import app from "./app";
// import { client } from "./config/db"; // without  knex
import log from "./utils/logger";


//connection'
const PORT = process.env.NODE_ENV === "test" ? 3000 : process.env.PORT;

app.listen(PORT, async () => {
  try {
    log.info(PORT);
    // await client.connect();  // without  knex
    log.info(`Listening on Port ${PORT}`);
  } catch (error: any) {
    log.error(error.message);
  }
});
