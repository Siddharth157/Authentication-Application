const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

//Get requests
router.get("/infor", auth, userCtrl.getUserInfor);
router.get("/all_infor", auth, authAdmin, userCtrl.getUsersAllInfor);
router.get("/logout", userCtrl.logout);

//Post requests
router.post("/add-details", userCtrl.register);
router.post("/activate-account", userCtrl.activateEmail);
router.post("/login", userCtrl.login);
router.post("/refresh_token", userCtrl.getAccessToken);
router.post("/forgot-password", userCtrl.forgotPassword);
router.post("/reset-password", auth, userCtrl.resetPassword);

//Delete request
router.delete("/delete/:id", auth, authAdmin, userCtrl.deleteUser);

//Update requests
router.patch("/update", auth, userCtrl.updateUser);
router.patch("/update_role/:id", auth, authAdmin, userCtrl.updateUsersRole);

module.exports = router;
