define(["jquery","underscore","orders","filterView","orderListView","mainPageView"], function($,_,Orders,FilterView, OrderListView, mainPageView) {

    var application = new Marionette.Application();
    //.extend({
    //initialize: function (options) {
    CONSTANTS = [
        STATES = {0: "Отменен", 1: "Отправлен курьерской службой", 2: "Выполнен"},
        CLASS_STATES = {0: "cancelledOrder", 1: "currentOrder", 2: "completedOrder"},
        PICTURE_STATES = {0: "images/cancelled-icon.png", 1: "images/car-icon.png", 2: "images/delivered-icon.png"},
        PAYMENT_METHODS = {0: "Наличными при получении", 1: "Безналичными"},
        DELIVERY_METHOD = {0: "Курьером лично в руки", 1: "Самовывоз"},
        ARROW_IMAGE = {0: "images/expand-opened-icon.png", 1: "images/expand-closed-icon.png"}
    ]
    ORDER_DISPLAY_FIELD = "display"
    application.on("before:start", function(){


        orders = new Orders();

        //async

        var json = $.getJSON("https://api.myjson.com/bins/1qzpw").done(function (json) {
            orders.fillFromJSON(json);

            var view = new mainPageView();
            view.render();

            var filterView = new FilterView({collection: orders, globalView: this}).render();
            view.getRegion('filter').show(filterView);

            var orderListView = new OrderListView({collection: orders}).render();
            view.getRegion('orderList').show(orderListView);
            //view.removeRegion('orderList');
            //$('#ordersSection').append(view);
        }).fail(function () {
            alert("A problem with loading json!");
        });

        //setTimeout(function la() {
        //    console.log(this);
        //}.bind(json), 4000);

    })


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

    //}

    return application;
});