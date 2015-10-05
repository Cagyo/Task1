define(["jquery", "underscore", "hbs!templates/bookList", "hbs/handlebars", "marionette_node"], function ($, _, templateFile, Handlebars, Marionette) {
    var BookListView = Marionette.ItemView.extend({

        tagName: 'div',
        className: 'bookList',
        template: templateFile,
        //childView: BookView,
        initialize: function (options) {
            //debugger;
            console.log(options);
        }

    });
    return BookListView;
});