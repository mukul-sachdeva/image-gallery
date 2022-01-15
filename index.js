import express from "express";
const app = express();
import routes from "./routes/routes.js";

app.use(express.urlencoded({ extended: true }));
routes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
