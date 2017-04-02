'use strict';

var StudentListView = Backbone.View.extend({
    tagName: 'div',

    template: tpl.StudentListHeader,

    render: function () {
        this.$el.html(this.template);

        this.collection.forEach(function (student) {
            var studentView = new ItemView({model: student});
            this.$el.append( studentView.render().$el);
        }, this);

        return this;
    }
});