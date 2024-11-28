import express from 'express';
import { v4 as uuid } from 'uuid';
import authMiddleware from './middlewares/authMiddleware.js';
import validationMiddleware from './middlewares/validationMiddleware.js';

const app = express();
app.use(express.json());

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

const port = 3003;


app.get('/students', (req, res) => {
    if (students.length === 0) {
        res.status(404).json({ "message": "No hay estudiantes registrados" });
    } else {
        res.json(students);
    }
});


app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
    const { name, age, major } = req.body;

    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id, name, age, major };
    students.push(newStudent);

    res.json({ message: "Estudiante creado", student: newStudent });
});

app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;

    const studentIndex = students.findIndex(student => student.id === parseInt(id));

    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

    students[studentIndex] = { ...students[studentIndex], name, age, major };

    res.json({ message: 'Estudiante actualizado', student: students[studentIndex] });
});

app.delete('/students/:id', authMiddleware, (req, res) => {
    const { id } = req.params;

    const studentIndex = students.findIndex(student => student.id === parseInt(id));

    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

    const deletedStudent = students.splice(studentIndex, 1);
    res.json({ message: 'Estudiante eliminado', student: deletedStudent[0] });
});


app.listen(port, () => {
    console.log(`Servidor funcionando correctamente en el puerto ${port}`);
});
