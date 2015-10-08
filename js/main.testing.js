require.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        handlebars: '../lib/vendor/require-handlebars-plugin/hbs/handlebars.runtime',
        hbs: '../lib/vendor/require-handlebars-plugin/hbs',
        marionette: '../lib/vendor/backbone.marionette/lib/backbone.marionette',
        marionette_node: '../node_modules/backbone.marionette/lib/backbone.marionette',
        radio: '../node_modules/backbone.radio/build/backbone.radio',
        mocha: '../node_modules/mocha/mocha',
        sinon: '../node_modules/sinon/lib/sinon',
        chai: '../lib/vendor/chai/chai',
        application: 'Application',
        order: 'models/Order',
        orders: 'collections/Orders',
        filterButton: 'models/filterButton',
        filterButtons: 'collections/filterButtons',
        orderView: 'views/orderView',
        book: 'models/Book',
        books: 'collections/Books',
        bookView: 'views/bookView',
        mainView: 'views/mainView',
        mainLayoutView: 'views/mainLayoutView',
        filterView: 'views/filterView',
        filterButtonView: 'views/filterButtonView',
        mainController: 'controllers/mainController',
        orderConstants: 'constants/OrderConstants',
        otherConstants: 'constants/OtherConstants'
    },
    hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});

require(["chai","sinon"],function(chai,sinon){
    //application.start();
    //var Example = require('modules/example');
    mocha.setup("bdd");

    function multiply (a,b) {
        return a*b;
    }

    describe("multiply", function() {

        it("возводит в n-ю степень", function() {
            chai.assert.equal(multiply(2, 3), 6);
        });

    });
    window.onload = function () {
        mocha.run();
    };
    debugger;
});