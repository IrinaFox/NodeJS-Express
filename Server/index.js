'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    engines = require('consolidate'),
    addressArray = __dirname.split('\\'),
    appAdress = (addressArray.splice(0, addressArray.length-1)).join('\\'),
    names = require('./names'),
    studentList = require('./studentList.json');

app.set('Client', appAdress + '/Client');
app.engine('html', engines.mustache);
app.set('Client engine', 'html');
app.use(express.static(path.join(appAdress, 'Client')));

app.get('/', startGet);
app.get('/getStudentList', getStudentList);
app.get('/getTime', getTime);
app.get('/getNames', getNames);
app.delete('/getStudentList/1', deleteStudent);

function startGet (request, response) {
    response.render('./index.html');
}

function getStudentList (request, response) {
    var studentsString = JSON.stringify(studentList);
    response.send(studentsString);
    response.end();
}

function getTime (request, response) {
    var date = new Date(),
        time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    response.send(time);
    response.end();
}

function getNames (request, response) {
    var returnedNames = JSON.stringify(names);
    response.send(returnedNames);
    response.end();
}

function deleteStudent (request, response) {
    console.log('!!!!!!!!!!deleted');
    response.send('deleted');
    response.end();
}

app.listen(3000);
console.log('express running on port 3000');