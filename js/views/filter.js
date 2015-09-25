define(["jquery","underscore","backbone","hbs!templates/filter","handlebars","orderListView"],function($,_,Backbone,templateFile, Handlebars, OrderListView) {
    var FilterView = Backbone.View.extend({
        template: templateFile,
        filters: null,
        initialize: function(){
            this.render();
        },

        filterEverything: function(){
            var state = -1;
            if (this.id === 'cancelledOrders') {
                state = 0;
            }
            else if (this.id === 'currentOrders') {
                state = 1;
            }
            else if (this.id === 'completedOrders') {
                state = 2;
            }

            var filteredOrders = orders.filterByState(state);
            if(state === -1) {
                filteredOrders = orders;
            }
            $('#ordersSection').empty();
            var view = new OrderListView({collection: filteredOrders});


            _.each($("h2"),function (filter){
                $("#"+filter.id).children("a:eq(0)").attr("class","selectedFilterItemUnderlined")
            });
            $("#"+this.id).children("a:eq(0)").attr("class","selectedFilterItem");

        },

        setHandlers: function(){
            this.filters = $("h2");
            _.each(this.filters, function(filter){
                filter.onclick = this.filterEverything;
            },this);
        },

        render: function(){
            this.el =  this.template();
            return this;
        }
    });
    return FilterView;
});