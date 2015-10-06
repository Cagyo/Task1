define(function(require, exports, module){
    var Marionette = require("marionette_node");
    var template = require("hbs!templates/bookView");

    return Marionette.ItemView.extend({
        tagName: 'div',
        className: 'bookList',
        template: template,

        initialize: function (options) {
            //console.log(options);
        }
    });
});