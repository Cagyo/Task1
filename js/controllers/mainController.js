define(function(require, exports, module){
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette");
    var Books = require("books");
    var Orders = require("orders");
    var FilterButtons = require("filterButtons");
    var FilterButton = require("filterButton");
    var MainLayoutView = require("mainLayoutView");
    var MainView = require("mainView");
    var FilterView = require("filterView");
    var $ = require("jquery");
    var _ = require("underscore");

    module.exports = Marionette.Object.extend({
        //initialCollection: null,
        currentCollection: null,

        initialize: function () {
            var booksCollection = new Books();
            var orders = new Orders();
            var filterButtons = new FilterButtons();
            $.when(
                booksCollection.fetch({reset: true}),
                orders.fetch({reset: true}),
                filterButtons.fetch({reset: true})
            ).done(function () {

                    this.mergeItemsWithOrders(orders,booksCollection);

                    this.mainView = new MainLayoutView({collection: orders}).render();
                    this.orderListView = new MainView({collection: orders}).render();
                    this.filterView = new FilterView({collection: filterButtons}).render();

                    this.mainView.showChildView("orderList",this.orderListView);
                    this.mainView.showChildView("filter", this.filterView);

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

            if(state !== 3)
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