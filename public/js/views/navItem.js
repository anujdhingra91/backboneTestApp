// nav item view

var MOB = MOB || {};

MOB.NavItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'navigation-item',
    template: _.template($('script.nav-item').html()),

    events:{
      "click": "highlight"
    },

    highlight:function() {
        this.$el.addClass("selected").siblings().removeClass('selected');
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));

        return this;
    }
});
