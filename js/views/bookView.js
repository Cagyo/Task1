define(["jquery", "underscore", "hbs!templates/bookView", "hbs/handlebars", "marionette_node"], function ($, _, templateFile, Handlebars, Marionette) {
    return Marionette.ItemView.extend({

        tagName: 'div',
        className: 'bookList',
        template: templateFile,

        initialize: function (options) {
            //console.log(options);
        }

    });
});