define(["jquery","underscore","filterOrderListView","marionette","orders","books"],function($,_,MainView, Marionette, Orders, Books) {
    //var userChannel = Radio.channel('user');
    var MainController = Marionette.Object.extend({
        initialCollection: null,
        currentCollection: null,

        initialize: function () {
            var booksCollection = new Books();
            var orders = new Orders();
            $.when(
                booksCollection.fetch({reset: true}),
                orders.fetch({reset: true})
            ).done(function () {
                this.mergeItemsWithOrders(orders,booksCollection);
                this.filterView = new MainView({collection: orders}).render();
                this.initialCollection = orders.clone();
                this.currentCollection = orders;
                this.listenTo(this.filterView, "filterApplied", this.applyFilter);
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
            filteredCollection = this.initialCollection.clone();
            if(state !== 3)
                var filteredCollection = this.initialCollection.filterByState(state);

            this.currentCollection.reset();
            filteredCollection.map(function (item) {
                this.currentCollection.add(item);
            },this);
        }
    });
    return MainController;
});