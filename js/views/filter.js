define(["jquery","underscore","backbone","hbs!templates/filter","handlebars"],function($,_,Backbone,templateFile, Handlebars) {
    var FilterView = Backbone.View.extend({
        template: templateFile,
        initialize: function(){
            this.render();
        },

        render: function(){
            this.el =  this.template();
            return this;
        }
    });
    return FilterView;
});