define(["jquery","underscore","orders","filterView","orderListView"], function($,_,Orders,FilterView, OrderListView){

    (function(){
        STATES = {CANCELLED: 0, INPROGRESS: 1, COMPLETED: 2};
        PAYMENTMETHODS = {CASH: 0, CASHLESS: 1};

        var filterView = new FilterView();
        $("#filter").append(filterView.el);
        filterView.setHandlers();

        orders = new Orders();
        orders.fillFromJSON("http://localhost:63342/task1/json/orders.json");

        var view = new OrderListView({collection: orders});


        //orderViews = [];
        //
        //orders.forEach(function(order){
        //    orderViews.push(new OrderView({model: order}));
        //});
        //
        //_.forEach(orderViews, function (orderView) {
        //    $('#ordersSection').append(orderView.el);
        //});
        //

    })();
});