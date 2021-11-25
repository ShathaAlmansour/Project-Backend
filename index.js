const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("./DB/db");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

const userRouter = require("./routers/routes/user");
const productRouter = require("./routers/routes/product");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRouter);
app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
