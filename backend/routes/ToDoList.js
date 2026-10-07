const express = require("express");
const router = express.Router();
const {
  getAllToDoList,
  getToDoListById,
  createToDoList,
  deleteToDoListById,
  updateToDoListById,
} = require("../controller/ToDoController");

/*
 * Routes: /api/ToDoList
 * method: GET
 * description: get all the todolist
 * parameters: none
 * Access : Public
 */

router.get("/", getAllToDoList);

/*
 * Routes: /api/ToDoList/:id
 * method: GET
 * description: get a single to do list by its id
 * parameters: id
 * Access : Public
 */
router.get("/:id", getToDoListById);

/*
 * Routes: /api/ToDoList/
 * method: POST
 * description: Create / add a new To Do List
 * parameters: none
 * Access : Public
 */
router.post("/", createToDoList);

/*
 * Routes: /api/ToDoList/:id
 * method: DELETE
 * description: Delete a To DO List by using its id
 * parameters: id
 * Access : Public
 */
router.delete("/:id", deleteToDoListById);

/*
 * Routes: /api/ToDoList/:id
 * method: PATCH
 * description: Update a To Do List by its id
 * parameters: id
 * Access : Public
 */
router.patch("/:id", updateToDoListById);

module.exports = router;
