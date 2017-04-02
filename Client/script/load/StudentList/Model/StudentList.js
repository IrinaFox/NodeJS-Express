'use strict';

var StudentList = Backbone.Collection.extend ({
    model: Student,
    url: '/getStudentList'
});