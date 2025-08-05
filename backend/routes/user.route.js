// import express from "express";
// // import { login,register,updateProfile }
// import {
//   login,
//   updateProfile,
//   register,
// } from "../controllers/User.controller.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";

// const router = express.Router();

// router.route = "/register".post(register);
// router.route = "/login".post(login);
// router.route = "/profile/update".post(isAuthenticated, updateProfile);

// export default router;

// import express from "express";
// import {
//   login,
//   updateProfile,
//   register,
// } from "../controllers/User.controller.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";

// const router = express.Router();

// router.post("/register", register); // ✅ correct
// router.post("/login", login); // ✅ correct
// router.post("/profile/update", isAuthenticated, updateProfile); // ✅ correct

// export default router;

import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/User.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";
// import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
// router.route("/profile/update").post(isAuthenticated, updateProfile);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

export default router;
