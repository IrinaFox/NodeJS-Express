'use strict';

var Student = Backbone.Model.extend ({
    defaults: {
        name: '',
        lastName: '',
        gender: 'male',
        skype: '',
        phone: '380505556677',
        email: 'name@mail.ru',
        birthday: 1900
    },

    initialize: function() {
        this.getAge();
        this.getFullName();
        this.listenTo(this, 'change', this.getFullName);
    },

    getAge: function () {
        var date = new Date(),
        birthday = this.get('birthday'),
        birthdayDate = new Date(birthday),
        age;

        age = date.getFullYear() - birthdayDate.getFullYear();

        this.set('age', age)
    },

    getFullName: function () {
        var fullName = this.get('name') + ' ' + this.get('lastName');
        this.set('fullName', fullName);
    }
});