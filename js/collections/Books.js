define(function(require, exports, module){
    var Book = require("book");
    var Backbone = require("backbone");

    return Backbone.Collection.extend({
        model: Book,
        url: 'json/v2/books.json'
    });
});