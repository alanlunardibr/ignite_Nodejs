const express = require("express")

const app = express()

app.get("/", (request, response) => {
    return response.json( { message: "test22e" })
})

app.get("/cursos", (request, response) => {
    return response.json([ "Curso 1", "Curso", "Curso3", "Curso4" ])
})

app.post("/cursos", (request, response)=> {
    return response.json([ "Curso 1", "Curso", "Curso3", "Curso4" ])
})

app.put("/cursos/:id", (request, response)=> {
    return response.json(["Curso6", "Curso 1", "Curso", "Curso3" ])
})

app.patch("/cursos/:id", (request, response)=> {
    return response.json([ "Curso44", "Curso 1", "Curso", "Curso3" ])
})

app.delete("/cursos/:id", (request, response)=> {
    return response.json([ "Curso 1", "Curso2", "Curso3" ])
})


app.listen(3334)