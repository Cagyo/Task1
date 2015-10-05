define(["jquery","underscore","backbone","book"],function($,_,Backbone,Book) {
    return Backbone.Collection.extend({
        model: Book,
        url: 'json/v2/books.json'
    });
});