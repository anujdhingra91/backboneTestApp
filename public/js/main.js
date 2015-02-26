var MOB = MOB || {};

MOB.pane = $('#current-pane');

MOB.Router = Backbone.Router.extend({
    routes: {
        '': 'homePage',
        'view': 'viewNotes',
        'add': 'addNote',
        'editNote/:_id': 'editNote'
    },

    initialize: function () {
        MOB.notes = new MOB.Notes;
        MOB.notes.fetch({
            success: function () {
                Backbone.history.start();

                MOB.navView = new MOB.NavView;
                MOB.navView.render(MOB.router.routes);
            }
        });
    },

    render: function (view) {
        MOB.pane.empty().append(view.render().delegateEvents().$el);
    },

    homePage: function () {
        MOB.homeView = MOB.homeView || new MOB.HomeView;

        this.render(MOB.homeView);
    },

    viewNotes: function () {
        MOB.notesListView = MOB.notesListView || new MOB.NotesListView;

        this.render(MOB.notesListView);
    },

    addNote: function () {
        MOB.addEditView = MOB.addEditView || new MOB.AddEditView;

        MOB.addEditView.model = new MOB.Note({
            title: '',
            text: ''
        });

        this.render(MOB.addEditView);
    },

    editNote: function(_id){
        MOB.addEditView = MOB.addEditView || new MOB.AddEditView;

        var note = MOB.notes.findWhere({_id: _id});
        console.log(note);
        MOB.addEditView.model = note;
        this.render(MOB.addEditView);
    }
});

MOB.router = new MOB.Router;
