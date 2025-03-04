const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.addTask = async (req, res) => {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.json(newTask);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
};
