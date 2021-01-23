const { response } = require("express")
const express = require("express")
const fetch = require("node-fetch")
const path = require("path")
const parser = require("body-parser")
const { saluta }  = require("./public/function")
const { router }  = require("./public/router")
const app = express()

app.use(express.static(path.join(__dirname, "/public")))


app.get("/post", (req, res)=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : 'POST'
    })
    .then(response => response.json())
    .then(j=> {
        console.log(j)


        const arr = [1 , 4, 6, "banana"]

function M (array){
    array.reduce((acc, i)=>{
        acc+=array[i] 
        return acc
    })

}

console.log(M(arr))


        res.send(`<h1>stai effettuando una chiamata in post il cui id è ${j.id}</h1>
                    ${saluta("Filippo")}
        `)

    })

})
app.use('/router', router)
app.listen(8080, console.log("Applicazione avviata"))



