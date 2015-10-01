define(["jquery","underscore","hbs!templates/orderList","handlebars","orderView","marionette_node","radio"],function($,_,templateFile, Handlebars,OrderView,Marionette,Radio) {
    var userChannel = Radio.channel('user');
    var OrderListView = Marionette.CollectionView.extend({
        template: templateFile,
        orderViews: [],
        childView: OrderView,
        initialCollection: null,

        initialize: function() {
            //this.render();
            this.initialCollection = this.collection.clone();

            userChannel.on('some:event', function(e) {
                //console.log(this);
                //console.log(e);

                var state = userChannel.request('some:request');
                if(state !== -1)
                    var res = this.initialCollection.filterByState(state);
                else
                    res = this.initialCollection.clone();
                this.collection.reset();
                res.map(function (item) {
                    this.collection.add(item);
                },this);
                //this.collection = res;
                //this.render();
                //debugger;

            }.bind(this));
        },

        beforeRender: function () {
            $("#orderList").empty();
        },
        onRender: function(){
            //$("#orderList").empty();
            //$("#orderList").append(this.el);
            //orderViews = [];
            //
            //    this.collection.map(function(order, key){
            //        orderViews.push(new OrderView({model: order}).render());
            //    });
            //
            //    _.map(orderViews, function (orderView, key) {
            //        //orderView;
            //        $('#ordersSection').append(orderView.el);
            //    });
        }
        //render: function(){
        //    this.$el.html(this.template());
        //    $("#orderList").empty();
        //    $("#orderList").append(this.el);
        //
        //    orderViews = [];
        //
        //    this.collection.map(function(order, key){
        //        orderViews.push(new OrderView({model: order}).render());
        //    });
        //
        //    _.map(orderViews, function (orderView, key) {
        //        //orderView;
        //        $('#ordersSection').append(orderView.el);
        //    });
        //    return this;
        //}
    });
    return OrderListView;
});
