define(["jquery","underscore","hbs!templates/bookList","hbs/handlebars","marionette_node","bookView"],function($,_,templateFile, Handlebars, Marionette,BookView) {
    var BookListView = Marionette.CollectionView.extend({
        template: templateFile,
        childView: BookView,

        //initialize: function(){
        //
        //},
        //
        //render: function(){
        //
        //    this.collection.map(function(book){
        //
        //    });
        //    this.el =  this.template(this.model);
        //    return this;
        //}
    });
    return BookListView;
});