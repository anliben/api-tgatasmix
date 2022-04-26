const express = require("express");
const client = require("../database");

const router = express.Router();

const db = client.db("tgatasmix")
const player = db.collection("planos");

router.get("/find", async (req, res) => {
    try {
        let response = await player.find({}).toArray()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })

    }
});

module.exports = (app) => app.use("/planos", router);
