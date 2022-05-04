const express = require("express");
const client = require("../database");

const router = express.Router();

const db = client.db("tgatasmix");
const planos = db.collection("planos");

router.get("/find", async (req, res) => {
  try {
    let response = await planos.find({}).toArray();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ message: "erro ao pegar store" });
  }
});

router.post("/insertOne", async (req, res) => {
  try {
    let response = await planos.insertOne(req.body);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ message: "erro ao pegar store" });
  }
});

router.put("/updateOne", async (req, res) => {
  try {
    let response = await planos.updateOne({name: req.body.name},{
      $set: {
        name: req.body.name,
        type: req.body.type,
        descricao: req.body.descricao,
        valor: req.body.valor,
        link: req.body.link
      },
    });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(400).json({ message: "erro ao pegar store" });
  }
});

router.delete("/deleteOne", async (req, res) => {
    try {
      let response = await planos.deleteOne(req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).json({ message: "erro ao pegar store" });
    }
  });

module.exports = (app) => app.use("/planos", router);
