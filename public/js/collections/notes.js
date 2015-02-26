// notes collection

var MOB = MOB || {};

MOB.Notes = Backbone.Collection.extend({
    model: MOB.Note,
    url: '/notes'
});
