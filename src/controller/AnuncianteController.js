const express = require("express");
const client = require("../database");
const router = express.Router();

const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({ uploadDir: './uploads' })

const db = client.db("tgatasmix")
const anunciante = db.collection("anunciante");
const auth = db.collection("auth");

router.get("/find", async (req, res) => {
    try {
        let response = await anunciante.find({}).toArray()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar anunciante' })

    }
});

router.post("/insertOne", async (req, res) => {
    try {
        let authResponse = await auth.insertOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        if(authResponse){
            let response = await anunciante.insertOne({
                name: req.body.name,
                email: req.body.email,
                phone: 'nenhuma',
                city: 'nenhuma',
                region: 'nenhuma',
                imageProfile: '',
                imageBanner: '',
                descricao: 'nenhuma',
                star: '1',
                idade: 'nenhuma',
                cache: 'nenhuma',
                pagamento: 'nenhuma',
                horario: 'nenhuma',
                locais: 'nenhuma',
                activated: 'false',
                posts: []
            })
            return res.status(200).json(response)
        }
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar anunciante' })

    }
});

router.put("/updateOne", async (req, res) => {
    console.log(req);
    try {
        let authResponse = await auth.insertOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        if(authResponse){
            let response = await anunciante.updateOne({email: req.body.email}, {
                $set:{
                    name: req.body.name,
                    phone: req.body.phone,
                    city: req.body.city,
                    region: req.body.region,
                    descricao: req.body.descricao,
                    idade: req.body.idade,
                    cache: req.body.cache,
                    pagamento: req.body.pagamento,
                    horario: req.body.horario,
                    locais: req.body.locais,
                    activated: req.body.activated
                }
            })
            return res.status(200).json(response)
        }
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar anunciante' })

    }
});

router.get("/findOne", async (req, res) => {

    console.log(req)

    try {
        let responseAuth = await auth.findOne({email: req.query.email, password: req.query.password })
        if(responseAuth){
            let response = await anunciante.findOne({email:req.query.email})
            return res.status(200).json(response)
        }
    } catch (err) {
        return res.status(400).json({ message: 'erro ao pegar anunciante' })
    }
});

router.post('/uploadProfilePhoto', multipartMiddleware, async (req, res) => {
    const files = req.files;
    
    console.log(req)

    const response = await anunciante.updateOne({email: req.body.email}, {
        $set: {
            imageProfile: files.files.path.split('/')[1]
        }
    });
    return res.status(200).json(response);
})

router.post('/uploadStoryPhoto', multipartMiddleware, async (req, res) => {
    const files = req.files;
    
    console.log(req)

    const response = await anunciante.updateOne({email: req.body.email}, {
        $set: {
            imageProfile: files.files.path.split('/')[1]
        }
    });
    return res.status(200).json(response);
})

router.post('/uploadBannerPhoto', multipartMiddleware, async (req, res) => {
    const files = req.files;
    
    console.log(req)

    const response = await anunciante.updateOne({email: req.body.email}, {
        $set: {
            imageBanner: files.files.path.split('/')[1]
        }
    });
    return res.status(200).json(response);
})

router.post('/uploadYourPagePhoto', multipartMiddleware, async (req, res) => {
    const files = req.files;
    
    console.log(req, files)

/* 
    const response = await anunciante.updateOne({email: req.body.email}, {
        $set: {
            imageProfile: files.files.path.split('/')[1]
        }
    }); */
    return res.status(200).json(response);
})

module.exports = (app) => app.use("/anunciante", router);
