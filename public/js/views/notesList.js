// notes list view

var MOB = MOB || {};

MOB.NotesListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'notes-list',

    initialize: function () {
        this.collection = MOB.notes;

        this.listenTo(this.collection, 'remove', this.render);
    },

    render: function () {
        this.$el.empty();
        if(this.collection.length == 0)
        {
            this.$el.append("<span>Empty List.. Go ahead add a note</span>");
            return this;
        }


        this.collection.each(function (item) {
            this.$el.append(this.renderItem(item));
        }, this);

        return this;
    },

    renderItem: function (item) {
        var notesListItemView = new MOB.NotesListItemView({
            model: item
        });

        return notesListItemView.render().$el;
    }
});
