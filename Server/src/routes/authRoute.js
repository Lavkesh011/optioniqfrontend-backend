import express from "express";
import { forgotPasswordController, loginController, registerController } from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router =express.Router();

//routing
//Register route
router.post('/register',registerController)
   
//LOGIN || POST
router.post("/login", loginController);
 

//Forgot Password || POST 
router.post("/forgot-password", forgotPasswordController);


//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


//protected Admin route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;