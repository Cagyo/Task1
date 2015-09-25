define(["jquery","underscore","backbone","hbs!templates/book","hbs/handlebars"],function($,_,Backbone,templateFile, Handlebars) {
    var BookView = Backbone.View.extend({
        template: templateFile,
        initialize: function(){
            this.render();
        },

        render: function(){
            this.el =  this.template(this.model);
            return this;
        }
    });
    return BookView;
});