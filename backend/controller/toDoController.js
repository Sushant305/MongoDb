const mongoose = require("mongoose");
const ToDoListModel = require("../model/ToDoListModel");


// get all the ToDolist
exports.getAllToDoList = async (req, res) => {
  try {
    const ToDoList = await ToDoListModel.find({}).sort({ createdAt: -1 });

    if (!ToDoList || ToDoList.length === 0) {
      return res.status(404).json({
        error: "No To Do List are present",
      });
    }
    res.status(200).json(ToDoList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a To Do List by a single id
exports.getToDoListById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const ToDoList = await ToDoListModel.findById(id);
    if (!ToDoList) {
      return res.status(404).json({
        error: "No To Do List are present",
      });
    }
    res.status(200).json(ToDoList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createToDoList = async (req, res) => {
  const { title, description} = req.body;

  try {
    // const workout = await Workout.insertMany(req.body)
    const ToDoList = await ToDoListModel.create({ title, description });
    res.status(201).json(ToDoList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a To Do List by its id
exports.deleteToDoListById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const ToDoList = await ToDoListModel.findByIdAndDelete(id);
    if (!ToDoList) {
      return res.status(404).json({
        error: "No To Do List are present",
      });
    }
    res.status(200).json({ message: "To Do List deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a To Do List by its id
exports.updateToDoListById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        error: "This is invalid Id",
      });
    }
    const ToDoList = await ToDoListModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true },
    );
    if (!ToDoList) {
      return res.status(404).json({
        error: "No To Do List found with this id",
      });
    }
    res.status(200).json(ToDoList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};