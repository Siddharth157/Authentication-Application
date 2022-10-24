const todo = require("../models/todoModel");

const todoCtrl = {
  addTodo: async (req, res) => {
    try {
      const newTodo = await todo.create({
        data: req.body.text,
        createdAt: Date.now(),
      });

      await newTodo.save();
      return res.status(200).json(newTodo);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  displayTodo: async (req, res) => {
    try {
      const list = await todo.find({}).sort({ createdAt: -1 });
      return res.status(200).json(list);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  toggleTodoDone: async (req, res) => {
    try {
      const ref = await todo.findById(req.params.id);
      const obj = await todo.findOneAndUpdate(
        { _id: req.params.id },
        { done: !ref.done }
      );
      await obj.save();

      return res.status(200).json(obj);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  updateTodos: async (req, res) => {
    try {
      await todo.findOneAndUpdate(
        { _id: req.params.id },
        { data: req.body.data }
      );
      const lst = await todo.findById(req.params.id);
      return res.status(200).json(lst);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

module.exports = todoCtrl;
