define(function(require, exports, module){
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette"),
        Books = require("books"),
        Orders = require("orders"),
        FilterButtons = require("filterButtons"),
        MainLayoutView = require("mainLayoutView"),
        orderListView = require("orderListView"),
        FilterView = require("filterView"),
        $ = require("jquery"),
        _ = require("underscore"),
        CONSTANTS = require("otherConstants");
    Object.freeze(CONSTANTS);

    module.exports = Marionette.Object.extend({
        //initialCollection: null,
        currentCollection: null,

        initialize: function () {

        },

        start: function () {
            var booksCollection = new Books();
            var orders = new Orders();
            var filterButtons = new FilterButtons();
            $.when(
                booksCollection.fetch({reset: true}),
                orders.fetch({reset: true}),
                filterButtons.fetch({reset: true})
            ).done(function () {

                    this.mergeItemsWithOrders(orders,booksCollection);

                    this.mainLayoutView = new MainLayoutView({collection: orders}).render();
                    this.orderListView = new orderListView({collection: orders}).render();
                    this.filterView = new FilterView({collection: filterButtons}).render();

                    this.mainLayoutView.showChildView("orderList",this.orderListView);
                    this.mainLayoutView.showChildView("filter", this.filterView);

                    this.currentCollection = orders;
                    this.listenTo(this.filterView, "filterApplied", this.applyFilter);
                    //Marionette.Behaviors.behaviorsLookup = function () {
                    //
                    //    var behaviorStorage = {};
                    //    _.extend(behaviorStorage, {filterApplied: function (state) {
                    //        console.log(state);
                    //    }});
                    //
                    //    return behaviorStorage;
                    //};
                }.bind(this));
        },

        mergeItemsWithOrders: function (orderCollection, booksCollection) {
            orderCollection.map(function (order) {
                var orderBookCollection = new Books();
                var bookInfo = order.get('items');
                bookInfo.map(function (bookInfo) {
                    var selectedBook = booksCollection.findWhere({"bookId": bookInfo.bookId}).clone();
                    selectedBook.set("count", bookInfo.count);
                    orderBookCollection.add(selectedBook);
                }.bind(this));
                order.set('items', orderBookCollection);
                order.orderFinished();
            }.bind(this));
        },

        applyFilter: function (state) {
            var filter = function(child, index, collection) {
                return child.get('state') === state;
            };

            if(state !== CONSTANTS.DEFAULT_STATE)
                this.orderListView.filter = filter;
            else
                this.orderListView.filter = null;
            this.orderListView.render();

            //filteredCollection = this.initialCollection.clone();
            //if(state !== 3)
            //    var filteredCollection = this.initialCollection.filterByState(state);
            //
            //this.currentCollection.reset();
            //filteredCollection.map(function (item) {
            //    this.currentCollection.add(item);
            //},this);
        }
    });
});