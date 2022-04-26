const express = require("express");
const client = require("../database");

const router = express.Router();

const db = client.db("tgatasmix")
const auth = db.collection("auth");
const player = db.collection("anunciante");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    let user = await auth.insertOne(req.body);
    await player.insertOne(
      {
        "star": 0,
        "name": req.body.user,
        "email": req.body.email,
        "idade": 0,
        "cache": 0,
        "pagamento": "",
        "horario": "",
        "phone": "",
        "city": "",
        "locais": "",
        "region": "",
        "phone": "",
        "city": "",
        "region": "",
        "imageProfile": "https://via.placeholder.com/150",
        "imageBanner": "https://via.placeholder.com/300x150",
        "descricao": "",
        "activated":"",
        "posts":[
          {
            "id": "1",
            "imagePost": "https://via.placeholder.com/150x300"
          }
        ]
      }
    );
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Registration failed" });
  }
});

router.get("/signin", async (req, res) => {
  try {
    let user = await auth.findOne(req.query);
    if (user !== null) {
      let player_res = await player.findOne({ email: user.email });
      return res.status(200).json(player_res);
    }
    return res.status(400).json({ error: "Login failed" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Login failed" });
  }
});

module.exports = (app) => app.use("/auth", router);
