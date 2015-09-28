define(["jquery","underscore","orders","filterView","orderListView"], function($,_,Orders,FilterView, OrderListView){

    (function(){
        STATES = {0: "???????", 1: "????????? ?????????? ???????", 2: "????????"};
        CLASS_STATES = {0: "cancelledOrder", 1: "currentOrder", 2: "completedOrder"};
        PICTURESTATES = {0: "images/cancelled-icon.png", 1: "images/car-icon.png", 2: "images/delivered-icon.png"}
        PAYMENTMETHODS = {0: "????????? ??? ?????????", 1: "????????????"};
        DELIVERYMETHOD = {0: "???????? ????? ? ????", 1: "?????????"};

        var filterView = new FilterView();
        filterView.render();
        $("#filter").append(filterView.el);
        filterView.setHandlers();

        orders = new Orders();
        var dfd = $.Deferred();
        function generate() {
            var view = new OrderListView({collection: orders});
            view.render();
        }
        orders.fillFromJSON("https://api.myjson.com/bins/1qzpw");
        generate();
        //var res = dfd.done(orders.fillFromJSON("http://localhost:63342/task1/json/orders.json")).resolve(generate);

        //    .done(function () {
        //    var view = new OrderListView({collection: orders});
        //}.bind(this));




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