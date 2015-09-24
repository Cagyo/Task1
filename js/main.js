require.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
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