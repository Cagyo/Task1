define(["jquery","underscore","orders","filterView","orderListView"], function($,_,Orders,FilterView, OrderListView){

    (function(){
        STATES = {0: "???????", 1: "????????? ?????????? ???????", 2: "????????"};
        CLASS_STATES = {0: "cancelledOrder", 1: "currentOrder", 2: "completedOrder"};
        PICTURE_STATES = {0: "images/cancelled-icon.png", 1: "images/car-icon.png", 2: "images/delivered-icon.png"}
        PAYMENT_METHODS = {0: "????????? ??? ?????????", 1: "????????????"};
        DELIVERY_METHOD = {0: "???????? ????? ? ????", 1: "?????????"};
        ORDER_DISPLAY_FIELD = "display";

        var filterView = new FilterView().render();
        $("#filter").append(filterView.el);
        filterView.setHandlers();

        orders = new Orders();

        //async

        var json = $.getJSON("https://api.myjson.com/bins/1qzpw").then(function (json) {
            orders.fillFromJSON(json);
            var view = new OrderListView({collection: orders}).render();
            //$('#ordersSection').append(view);
        },function () {
            alert("A problem with loading json!");
        });


        //var dfd = $.Deferred();

        //sync

        /*function generate() {
         var view = new OrderListView({collection: orders}).render();
         }
         orders.fillFromJSON("https://api.myjson.com/bins/1qzpw");
         generate();*/

        //.bind(this);
        //res.success(function () {
        //    var view = new OrderListView({collection: orders});
        //});

        //orderViews = [];
        //
        //orders.forEach(function(order){
        //    orderViews.push(new OrderView({model: order}).render());
        //});
        //
        //_.forEach(orderViews, function (orderView) {
        //    $('#ordersSection').append(orderView.el);
        //});
        //

    })();
});