// add/edit view

var MOB = MOB || {};

MOB.AddEditView = Backbone.View.extend({
    className: 'add',
    template: _.template($('script.add-edit-pane').html()),

    events: {
        'click button': 'save',
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    },

    save: function (e) {
        var title = this.$('.title').val().trim();
        var text = this.$('.text').val().trim();

        if (!title || !text) {
            alert("You can't leave field blank man.. Common!!");
            return;
        }

        clearInputs = function () {
            this.$('.title').val('');
            this.$('.text').val('');

            window.location.hash = 'view';
        }

        if (this.model.isNew()) {
            MOB.notes.create({
                title: title,
                text: text
            }, {
                wait: true,
                success: clearInputs
            });
        } else {
            this.model.save({
                title: title,
                text: text
            }, {
                wait: true,
                success: clearInputs
            });
        }

        e.preventDefault();

        return false;
    }
});
