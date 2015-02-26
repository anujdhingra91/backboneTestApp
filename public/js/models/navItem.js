// nav item model

var MOB = MOB || {};

MOB.NavItem = Backbone.Model.extend({
    initialize: function (options) {
        _.extend({
            path: '',
            text: 'Home'
        }, options);

        this.attributes.path = options.path;
        this.attributes.text = options.text;
    }
});
