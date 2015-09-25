define(["jquery","underscore","backbone","hbs!templates/orderList","handlebars","orderView"],function($,_,Backbone,templateFile, Handlebars,OrderView) {
    var OrderListView = Backbone.View.extend({
        template: templateFile,
        orderViews: [],
        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template());
            $("#orderList").empty();
            $("#orderList").append(this.el);

            orderViews = [];

            this.collection.forEach(function(order){
                orderViews.push(new OrderView({model: order}));
            });

            _.forEach(orderViews, function (orderView) {
                $('#ordersSection').append(orderView.el);
            });
            return this;
        }
    });
    return OrderListView;
});
