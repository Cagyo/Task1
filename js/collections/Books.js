define(function(require, exports, module){
    var Book = require("book"),
        Backbone = require("backbone");

    module.exports = Backbone.Collection.extend({
        model: Book,
        url: 'json/v2/books.json'
    });
});