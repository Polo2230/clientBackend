const userModel = require("../models/user");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const newUser = new userModel({ ...userData });
    console.log(newUser);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const reponse = await userModel.findById(id);
    console.log(reponse);
    res.status(200).json(reponse);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userDataEdit = req.body;
    console.log(id, userDataEdit);
    const response = await userModel.findByIdAndUpdate(id, userDataEdit);
    console.log(response);
    res.status(200).json({ message: "Actualización éxitosa" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
