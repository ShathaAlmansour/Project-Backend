const express = require("express");
const { creatUser, getAlluser, update,cartUsercheck,removeUserCart,getCart } = require("../controllers/user");
const userRouter = express.Router();

userRouter.post("/create", creatUser);
userRouter.get("/", getAlluser);
userRouter.put("/update/:id", update);
userRouter.put("/yourcart/:email/:ObjectId", cartUsercheck);
userRouter.put("/removecart/:email/:_id", removeUserCart);
userRouter.get("/cart/:email", getCart);

module.exports = userRouter;
