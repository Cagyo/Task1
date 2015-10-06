define(function(require, exports, module){
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette");
    var Books = require("books");
    var Orders = require("orders");
    var MainView = require("mainView");
    var $ = require("jquery");

    module.exports = Marionette.Object.extend({
        //initialCollection: null,
        currentCollection: null,

        initialize: function () {
            var booksCollection = new Books();
            var orders = new Orders();
            $.when(
                booksCollection.fetch({reset: true}),
                orders.fetch({reset: true})
            ).done(function () {
                this.mergeItemsWithOrders(orders,booksCollection);
                this.mainView = new MainView({collection: orders}).render();
                //this.initialCollection = orders.clone();
                this.currentCollection = orders;
                this.listenTo(this.mainView, "filterApplied", this.applyFilter);
            }.bind(this));
        },

        mergeItemsWithOrders: function (orderCollection, booksCollection) {
            orderCollection.map(function (order) {
                var orderBookCollection = new Books();
                var bookInfo = order.get('items');
                bookInfo.map(function (bookInfo) {
                    var selectedBook = booksCollection.where({"bookId": bookInfo.bookId})[0].clone();
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
                this.mainView.filter = filter;
            else
                this.mainView.filter = null;
            this.mainView.render();

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