define(["jquery","underscore","hbs!templates/book","hbs/handlebars","marionette_node"],function($,_,templateFile, Handlebars, Marionette) {
    var BookView = Marionette.ItemView.extend({
        template: templateFile,
        el:".bookList"
    });
    return BookView;
});