define(["jquery","underscore","hbs!templates/book","hbs/handlebars","marionette_node"],function($,_,templateFile, Handlebars, Marionette) {
    var BookView = Marionette.ItemView.extend({
        template: templateFile//,
        //initialize: function(){
        //    //this.render();
        //},
        //
        //render: function(){
        //    this.el =  this.template(this.model);
        //    return this;
        //}
    });
    return BookView;
});