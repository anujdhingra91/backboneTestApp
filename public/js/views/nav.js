// nav view

var MOB = MOB || {};

MOB.NavView = Backbone.View.extend({
    el: '#navigation',

    routeNames: {
        '': 'Home',
        'view': 'View Notes',
        'add': 'Add New Note'
    },

    render: function (routes) {
        this.$el.empty();

        _.each(routes, function(target, path) {
            if (this.routeNames.hasOwnProperty(path)) {
                this.$el.append(this.renderItem(path));
            }
        }, this);
    },

    renderItem: function (path) {
        var navItemView = new MOB.NavItemView({
            model: new MOB.NavItem({
                path: path,
                text: this.routeNames[path]
            })
        });

        return navItemView.render().$el;
    }
});
