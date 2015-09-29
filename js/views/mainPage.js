define(["jquery","underscore","hbs!templates/mainPage","hbs/handlebars","marionette_node"],function($,_,templateFile, Handlebars, Marionette) {
    var MainPageView = Marionette.LayoutView.extend({
        el: '#application',
        template: templateFile,
        regions: {
            filter  : '#filter',
            orderList : '#orderList'
        }
        //initialize: function(){
        //    //this.render();
        //},
        //
        //render: function(){
        //    this.el =  this.template(this.model);
        //    return this;
        //}
    });
    return MainPageView;
});