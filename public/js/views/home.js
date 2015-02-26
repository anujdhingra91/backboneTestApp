// home view

var MOB = MOB || {};

MOB.HomeView = Backbone.View.extend({
    className: 'home',
    template: _.template($('script.home-pane').html()),

    render: function () {
        this.$el.html(this.template());

        return this;
    }
})
