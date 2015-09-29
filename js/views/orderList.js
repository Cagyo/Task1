define(["jquery","underscore","hbs!templates/orderList","handlebars","orderView","marionette_node"],function($,_,templateFile, Handlebars,OrderView,Marionette) {
    var OrderListView = Marionette.CompositeView.extend({
        template: templateFile,
        orderViews: [],
        initialize: function(){
            //this.render();
        },

        render: function(){
            this.$el.html(this.template());
            $("#orderList").empty();
            $("#orderList").append(this.el);

            orderViews = [];

            this.collection.map(function(order, key){
                orderViews.push(new OrderView({model: order}).render());
            });

            _.map(orderViews, function (orderView, key) {
                //orderView;
                $('#ordersSection').append(orderView.el);
            });
            return this;
        }
    });
    return OrderListView;
});
