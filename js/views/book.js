define(["jquery","underscore","backbone","text!templates/book.html",],function($,_,Backbone,templateFile) {
    var BookView = Backbone.View.extend({
        //model: null,
        template: _.template(templateFile),
        initialize: function(){
            this.render();
        },

        render: function(){
            this.el =  this.template(this.model.toJSON());
        }
    });
    return BookView;
});