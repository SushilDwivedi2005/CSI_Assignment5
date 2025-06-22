import express from "express";
import User from "../models/UserModule.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      console.log("user already  exist");

      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "Account created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "error occoured" });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log('request recieved')
    const { email, password } = req.body;
    console.log(password)
    const user = await User.findOne({ email });
    if (!user) {
      console.log("no user found");

      return res.status(400).json({ success: false, message: "No user found" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    console.log(checkPassword)

    if (!checkPassword) {

      console.log('incorrrect password')
      return res
        .status(400)
        .json({ success: false, message: "incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkeyofnoteapp1234@#", {
      expiresIn: "5h",
    });

    // const newUser= new User({name,email,password:hashedPassword})
    // await newUser.save()
    return res
      .status(200)
      .json({
        success: true,
        token,
        user: { name: user.name },
        message: "login successfully",
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "error login server" });
  }
});


router.get('/verify',middleware,async(req,res)=>{
return res.status(200).json({success:true,user:req.user})
})

export default router;
