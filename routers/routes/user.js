const express = require("express");
const {
  creatUser,
  getAlluser,
  update,
  cartUsercheck,
  removeUserCart,
  getCart,
  updateUser,
  editFullName,
  findUserByEmail,
} = require("../controllers/user");
const userRouter = express.Router();

userRouter.post("/create", creatUser);
userRouter.get("/", getAlluser);
userRouter.put("/update/:id", update);
userRouter.put("/yourcart/:email/:ObjectId", cartUsercheck);
userRouter.put("/removecart/:email/:_id", removeUserCart);
userRouter.get("/cart/:email", getCart);
userRouter.put("/update/:_id", updateUser);
userRouter.put("/edit/:email", editFullName);
userRouter.get("/email/:email", findUserByEmail);

module.exports = userRouter;
