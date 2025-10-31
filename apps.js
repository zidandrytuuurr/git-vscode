const express = require('express')
const port = 8000

const app = express()
app.use(express.json())

const students = [
    {"id": 1, "nama": "A", "prodi": "ti"},
    {"id": 2, "nama": "B", "prodi": "ti"},
    {"id": 3, "nama": "C", "prodi": "te"},
    {"id": 4, "nama": "D", "prodi": "te"},
]

app.get('/', (req, res) => {
    res.status(200).json({
        "total": students.length,
        "data": students,
        "note": "All Students List"
    })
})

app.get('/students/:id', (req, res) => {
    let id_students = parseInt(req.params.id)
    let result = students.filter(s => s.id === id_students)
    console.log(id_students);

    if(result.length == 0) {
        return res.status(404).json({
            status: "Data Not Found"
        })
    }

    res.status(200).json({  
        message: "Students Found",  
        data: result
    })
}) 

app.post('/students', (req, res) => {
    const {nim, nama, prodi} = req.body
    if(!nim || !nama || !prodi) {
        return res.status(400).json({
            message: "NIM, Name and Prodi are Required"
        })
    }
    
    const newStudent = {
        "id": students.length + 1,
        "nim": nim,
        "nama": nama,
        "prodi": prodi
    }
    
    students.push(newStudent)  
    
    res.status(200).json({ 
        message: "Student Added Successfully",
        data: newStudent
    })
})

app.listen(port, () => {
    console.log(`Server Run at http://localhost:${port}`);
})