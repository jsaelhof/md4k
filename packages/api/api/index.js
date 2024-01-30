import app from "../dist/api/index.js";
import dotenv from "dotenv";

console.log("INDEX", process.cwd);

dotenv.config();

app.listen(process.env.PORT, () =>
  console.info(`Server started on port ${process.env.PORT}`)
);
