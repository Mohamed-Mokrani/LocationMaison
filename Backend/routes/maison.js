const express = require("express");
const maisonrouter = express.Router();
const maisons = require("../models/maison");

maisonrouter.post("/add", async (req, res) => {
  try {
    const newMaison = new maisons(req.body);
    const maison = await newMaison.save();
    res.send({ maison: maison, msg: "maison saved.." });
  } catch (error) {
    res.send(" can not save the user...");
  }
});

// get all maison
maisonrouter.get("/all", async (req, res) => {
  try {
    let result = await maisons.find();
    res.send({ maison: result, msg: "all maison found" });
  } catch (error) {
    console.log(error);
  }
});

// get by id
maisonrouter.get("/:id", async (req, res) => {
  try {
    let result = await maisons.findById({ _id: req.params.id });
    res.send({ maison: result, msg: " maison found" });
  } catch (error) {
    console.log(error);
  }
});

// update
maisonrouter.put("/:id", async (req, res) => {
  try {
    let result = await maisons.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " maison updated" });
  } catch (error) {
    console.log(error);
  }
});

// delete
maisonrouter.delete("/:id", async (req, res) => {
  try {
    let result = await maisons.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: " maison deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = maisonrouter;
