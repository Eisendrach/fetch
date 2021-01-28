const express = require("express")
const fetch =require("node-fetch")
const app = express()

numeri=["dhfbkd", "jhl", "kghkpto", "p", "dfhj", "jdfhhsdjh", "skjahdkh"]
const k= "vive la france"
const filtrati = numeri.filter(x=>x.split(" ").join("").length>4)
console.log(filtrati)
console.log(filtrati.length)
console.log(filtrati.join(" "))


app.get("/accreditamento", (req, res)=>{
    a={
        nome: "Manuel",
        cognome: "Barbieri"
    }
    res.send(a)
})

app.get("/somma-pari", (req,res)=>{
    const pari = numeri.filter(x=>x%2===0)
    const somma = pari.reduce((acc, i)=>acc+i)
    b={
        sum: somma
    }
    res.send(b)
})

app.get("/lista-parole-a", (req, res)=>{
    const filtrati = numeri.filter(x=>x.split(" ").join("").length>4)
    c={
        count:filtrati.length,
        words:filtrati.join(" ")
    }
    res.send(c)
})

app.get("/comments/:id", (req, res)=>{
    fetch(`https://jsonplaceholder.typicode.com/post/${req.params.id}/comments`)
    .then(response => response.json())
    .then(j=> {
        console.log(j)
        const pri=j[0].body
        console.log(pri)
        console.log(pri.replace("\n", " "))
        console.log(pri.split(" "))
    })
    .catch()
})
app.listen(8080, console.log("server avviato"))
