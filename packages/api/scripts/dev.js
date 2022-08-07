import app from "../api/index.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () =>
  console.info(`Server started on port ${process.env.PORT}`)
);
