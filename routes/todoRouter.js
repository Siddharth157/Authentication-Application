const router = require("express").Router();
//const auth = require("../middleware/auth");
const todoCtrl = require("../controllers/todoCtrl");

router.post("/add-todos", todoCtrl.addTodo);
router.get("/display-todos", todoCtrl.displayTodo);
router.get("/toggle-todos/:id", todoCtrl.toggleTodoDone);
router.put("/update-todos/:id",todoCtrl.updateTodos);

module.exports = router;
