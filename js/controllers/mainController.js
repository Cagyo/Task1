define(["jquery","underscore","filterOrderListView","marionette","orders","books"],function($,_,filterOrderListView, Marionette, Orders, Books) {
    //var userChannel = Radio.channel('user');
    var MainController = Marionette.Object.extend({
        initialCollection: null,
        ordersCollection: null,

        initialize: function () {
            var booksCollection = new Books();
            this.ordersCollection = new Orders();
            $.when(
                booksCollection.fetch({reset: true}),
                this.ordersCollection.fetch({reset: true})
            ).done(function () {
                this.ordersCollection.map(function (order) {
                    var orderBookCollection = new Books();
                    var bookIds = order.get('items');
                    bookIds.map(function (bookInfo) {
                        var selectedBook = booksCollection.where({"bookId": bookInfo.bookId})[0].clone();
                        selectedBook.set("count", bookInfo.count);
                        orderBookCollection.add(selectedBook);
                    }.bind(this))
                    order.set('items', orderBookCollection);
                    order.orderFinished();
                }.bind(this));

                this.filterView = new filterOrderListView({collection: this.ordersCollection}).render();
                this.initialCollection = this.ordersCollection.clone();
                this.listenTo(this.filterView,"filterApplied",this.applyFilter);
            }.bind(this));
        },

        applyFilter: function (state) {
            filteredCollection = this.initialCollection.clone();
            if(state !== 3)
                var filteredCollection = this.initialCollection.filterByState(state);

            this.ordersCollection.reset();
            filteredCollection.map(function (item) {
                this.ordersCollection.add(item);
            },this);
        }
    });
    return MainController;
});