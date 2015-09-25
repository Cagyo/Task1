define(["jquery","underscore","backbone","text!templates/filter.html","handlebars"],function($,_,Backbone,templateFile, Handlebars) {
    var FilterView = Backbone.View.extend({
        template: Handlebars.compile(templateFile),
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