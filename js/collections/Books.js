define(["jquery","underscore","backbone","book"],function($,_,Backbone,Book) {
    var Books = Backbone.Collection.extend({
        model: Book,
        url: 'https://api.myjson.com/bins/m61u'
    });
    return Books;
});