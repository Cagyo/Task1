define(["jquery","underscore","backbone","hbs!templates/orderList","handlebars","orderView"],function($,_,Backbone,templateFile, Handlebars,OrderView) {
    var OrderListView = Backbone.View.extend({
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
                orderViews.push(new OrderView({model: order}));
            });

            _.map(orderViews, function (orderView, key) {
                orderView.render();
                $('#ordersSection').append(orderView.el);
            });
            return this;
        }
    });
    return OrderListView;
});
