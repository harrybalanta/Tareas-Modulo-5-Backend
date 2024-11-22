import express from 'express';
import { v4 as uuid } from 'uuid';
const app = express()
app.use(express.json())

const students =
[
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];
const port = 3003
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})
app.get('/students', (req, res) => {
    if(students.length === 0) {
        res.status(404).json({ "message": "estudiantes" })
    }
    res.json(students)
})

app.post('/students', (req, res) => {
    const { name, age , major } = req.body
    const id = uuid()
    students.push({id, name, age, major})
    res.json({ "message": "students creado", "students": {name, age, major } })
})


app.listen(port, () => {
    console.log(`servidor funcionando corectamente por el puerto ${port}`)
})