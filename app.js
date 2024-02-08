const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const newStudent = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

const student3 = {
    firstName: "Marieme",
    lastName: "DIAKHOUMPA",
    age: 25
};

axios.post('http://localhost:8088/api/students', newStudent)
    .then(response => {
        console.log('Student added successfully:', response.data);
    })
    .catch(error => {
        console.error('Error adding student:', error);
    });
axios.post('http://localhost:8088/api/students', student3)
    .then(response => {
        console.log('Student added successfully:', response.data);
    })
    .catch(error => {
        console.error('Error adding student:', error);
    });

const updatedStudent = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

axios.put('http://localhost:8088/api/students/1', updatedStudent)
    .then(response => {
        console.log('Student updated successfully:', response.data);
    })
    .catch(error => {
        console.error('Error updating student:', error);
    });

axios.delete('http://localhost:8088/api/students/2')
    .then(response => {
        console.log('Student deleted successfully');
    })
    .catch(error => {
        console.error('Error deleting student:', error);
    });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
