import express from 'express'; 
import { v4 as uuid } from 'uuid';

const app = express();
app.use(express.json());

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

const port = 3003;


app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/students', (req, res) => {
    if (students.length === 0) {
        res.status(404).json({ "message": "No hay estudiantes registrados" });
    } else {
        res.json(students);
    }
});


app.post('/students', (req, res) => {
    const { name, age, major } = req.body;


    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'El nombre es obligatorio y debe ser un string no vacío' });
    }
    if (!age || typeof age !== 'number' || age <= 0) {
        return res.status(400).json({ message: 'La edad es obligatoria y debe ser un número positivo' });
    }
    if (!major || typeof major !== 'string' || major.trim() === '') {
        return res.status(400).json({ message: 'La carrera es obligatoria y debe ser un string no vacío' });
    }

    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1; // Generar ID único
    const newStudent = { id, name, age, major };
    students.push(newStudent);

    res.json({ "message": "Estudiante creado", "student": newStudent });
});


app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;

    const studentIndex = students.findIndex(student => student.id === parseInt(id));

    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

     if (name !== undefined) {
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'El nombre debe ser un string no vacío' });
        }
        students[studentIndex].name = name;
    }
    if (age !== undefined) {
        if (typeof age !== 'number' || age <= 0) {
            return res.status(400).json({ message: 'La edad debe ser un número positivo' });
        }
        students[studentIndex].age = age;
    }
    if (major !== undefined) {
        if (typeof major !== 'string' || major.trim() === '') {
            return res.status(400).json({ message: 'La carrera debe ser un string no vacío' });
        }
        students[studentIndex].major = major;
    }

    res.json({ message: 'Estudiante actualizado', student: students[studentIndex] });
});


app.delete('/students/:id', (req, res) => {
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
