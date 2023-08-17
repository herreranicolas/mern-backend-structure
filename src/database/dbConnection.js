import { connect } from "mongoose";
import { MONGODB_URI } from "../../config";

connect(MONGODB_URI).then((resp) =>
  console.log(`DB Connected on ${resp.connection.name}`)
);
