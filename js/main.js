require.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        handlebars: '../lib/vendor/handlebars/handlebars',
        worker: 'Worker',
        application: 'Application',
        order: 'models/Order',
        orders: 'collections/Orders',
        orderView: 'views/order',
        book: 'models/Book',
        books: 'collections/Books',
        bookView: 'views/book'
    }
});

require(["jquery","underscore","application"],function($,_,Application){

});