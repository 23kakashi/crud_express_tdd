import bunyan from "bunyan";

const log = bunyan.createLogger({ name: "crud_express_tdd" });

// const logResponse = function ( username: string, statusCode) {
//     body: {
//       username: username
//     }
//   log.info("response");
// };
export default log;
