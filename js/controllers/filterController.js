define(["jquery","underscore","filterOrderListView","marionette","orders"],function($,_,filterOrderListView, Marionette, Orders) {
    //var userChannel = Radio.channel('user');
    var FilterController = Marionette.Object.extend({
        initialCollection: null,

        initialize: function () {
            this.orders = new Orders();
            //b = new Books();
            //
            //    b.fetch({reset: true});
            var json = $.getJSON("json/orders.json").done(function (json) {
                this.orders.fillFromJSON(json);
                this.filterView = new filterOrderListView({collection: this.orders}).render();
                this.initialCollection = this.orders.clone();
                this.listenTo(this.filterView,"filterApplied",this.applyFilter);
            }.bind(this)).fail(function () {
                alert("A problem with loading json!");
            });
        },

        applyFilter: function (state) {
            filteredCollection = this.initialCollection.clone();
            if(state !== 3)
                var filteredCollection = this.initialCollection.filterByState(state);

            this.orders.reset();
            filteredCollection.map(function (item) {
                this.orders.add(item);
            },this);
        }
    });
    return FilterController;
});