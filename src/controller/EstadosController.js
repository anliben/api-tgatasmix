const express = require("express");
const client = require("../database");

const router = express.Router();

const db = client.db("tgatasmix")
const estado = db.collection("estados");

router.get("/find", async (req, res) => {
    try {
        let response = await estado.find({}).toArray()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })

    }
});

router.post("/findOne", async (req, res) => {
    try {
        let response = await estado.findOne({name: req.body.name})
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })

    }
});

router.post("/insertOne", async (req, res) => {
    try {
        let response = await estado.insert({
            name: req.body.name,
            cidades: []
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })
    }
});

router.post("/insertOneCity", async (req, res) => {
    try {
        let auth = await estado.findOne({name: req.body.nameState})
        let cidades = auth.cidades
        cidades.push({
            name: req.body.nameCity,
            foto: ''
        })
         let response = await estado.updateOne({name: req.body.nameState},{
             $set:{
                 cidades: cidades
             }
         })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })

    }
});


router.post("/deleteOne", async (req, res) => {
    try {
        let response = await estado.deleteOne({name: req.body.name})
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })
    }
});

router.post("/deleteOneCity", async (req, res) => {
    try {
        let auth = await estado.findOne({name: req.body.nameState})
        let cidades = auth.cidades
        let cities = cidades.filter((item) => item.name !== req.body.nameCity)

        let response = await estado.updateOne({name: req.body.nameState},{
            $set:{
                cidades: cities
            }
        })
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar store' })

    }
});

module.exports = (app) => app.use("/estados", router);
