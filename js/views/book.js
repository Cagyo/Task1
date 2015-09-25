define(["jquery","underscore","backbone","hbs!templates/book","hbs/handlebars"],function($,_,Backbone,templateFile, Handlebars) {
    /*Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 > v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper("priceWithDiscount", function(price, discount) {
        return price - price*discount/100;
    });*/
    var BookView = Backbone.View.extend({
        template: templateFile,
        initialize: function(){
            this.render();
        },

        render: function(){
            this.el =  this.template(this.model.toJSON());
            return this;
        }
    });
    return BookView;
});