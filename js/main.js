require.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        handlebars: '../lib/vendor/handlebars/handlebars',
        hbs: '../lib/vendor/require-handlebars-plugin/hbs',
        worker: 'Worker',
        application: 'Application',
        order: 'models/Order',
        orders: 'collections/Orders',
        orderView: 'views/order',
        book: 'models/Book',
        books: 'collections/Books',
        bookView: 'views/book',
        filterView: 'views/filter',
        orderListView: 'views/orderList'
    },
    hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});

require(["jquery","underscore","application"],function($,_,Application){

});