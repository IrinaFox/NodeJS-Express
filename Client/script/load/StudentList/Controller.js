'use strict';

var ControllerStudentList = (function () {
    function ControllerStudentList () {
        var _studentList = $('#contentStudentList'),
            students = new StudentList(),
            studentListView;

        studentListView = new StudentListView({collection: students});

        students.on('add', function () {
            _studentList.append(studentListView.render().$el);
        });

        mediator.sub('buttonClicked', function () {
            students.fetch();
        });

        mediator.sub('studentDeleted', function (student) {
            students.remove(student);
        });

        return this;
    }

    return ControllerStudentList;
})();
