// note view

var MOB = MOB || {};

MOB.NoteView = Backbone.View.extend({
    className: 'note',
    template: _.template($('.note-pane').html()),

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    }
});
