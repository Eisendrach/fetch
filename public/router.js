const express = require("express")
const router = express.Router()

router.get("/ciao", (req, res)=>{
    res.send(`<h1>CIAO ${req.query.nome}, SEI SULLA PAGINA </h1>`)
})

router.get("/addio/:nome", (req, res)=>{
    res.send(`<h1>ADDIO ${req.params.nome}, SEI SULLA PAGINA /ADDIO</h1>`)
})

router.get("/headers", (req, res)=>{
    console.log(req.headers)
    res.send(`<h1>${req.headers["accept-language"]}</h1>`)
})

module.exports.router = router