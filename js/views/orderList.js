define(["jquery","underscore","backbone","text!templates/filter.html","handlebars","orderView"],function($,_,Backbone,templateFile, Handlebars,OrderView) {
    var OrderListView = Backbone.View.extend({
        template: Handlebars.compile(templateFile),
        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template());
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
