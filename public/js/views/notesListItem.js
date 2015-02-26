// notes list item view

var MOB = MOB || {};

MOB.NotesListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'notes-list-item',
    template: _.template($('script.notes-list-item').html()),

    events: {
        'click .delete': 'delete'
        //'click #edit': 'edit'
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    },

    delete: function () {
        this.model.destroy();
        this.remove();
    }

    /*edit: function(){
        window.location.hash = 'add';

    }*/
});
