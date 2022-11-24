import app from "./app";
import { client } from "./config/db";
import log from "./utils/logger";

//connection'
const PORT = process.env.NODE_ENV === "test" ? 3000 : process.env.PORT;

app.listen(PORT, async () => {
  try {
    await client.connect();
    log.info(`Listening on Port ${PORT}`);
  } catch (error: any) {
    log.error(error.message);
  }
});
