'use strict';

var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'line',

    template: _.template(tpl.StudentListItem),

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .delete': 'deleteStudent',
        'click .value1': 'value1'
    },

    deleteStudent: function () {
        this.$el.remove();
        this.model.destroy();
        mediator.pub('studentDeleted', this.model);
    },

    value1: function () {
        var myValue = parseInt(this.model.get('value'))+1;
        this.model.set('value', myValue);
    }
});