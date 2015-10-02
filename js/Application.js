define(["jquery","underscore","orders","filterOrderListView","books","filterController"], function($,_,Orders,filterOrderListView, Books, FilterController) {

    application = new Marionette.Application();
    //.extend({
    //initialize: function (options) {
    CONSTANTS = [
        STATES = {0: "Отменен", 1: "Отправлен курьерской службой", 2: "Выполнен"},
        CLASS_STATES = {0: "cancelledOrder", 1: "currentOrder", 2: "completedOrder"},
        PICTURE_STATES = {0: "images/cancelled-icon.png", 1: "images/car-icon.png", 2: "images/delivered-icon.png"},
        PAYMENT_METHODS = {0: "Наличными при получении", 1: "Безналичными"},
        DELIVERY_METHOD = {0: "Курьером лично в руки", 1: "Самовывоз"},
        ARROW_IMAGE = {0: "images/expand-opened-icon.png", 1: "images/expand-closed-icon.png"}
    ];
    ORDER_DISPLAY_FIELD = "display";
    FILTER_CLASS_STATES = {0: "cancelledOrders", 1: "currentOrders", 2: "completedOrders", 3: "allOrders"}
    application.on("before:start", function(){
        var filterController = new FilterController();
        //orders = new Orders();
        ////b = new Books();
        ////
        ////    b.fetch({reset: true});
        //
        ////async
        //
        //var json = $.getJSON("json/orders.json").done(function (json) {
        //    orders.fillFromJSON(json);
        //    var filterView = new filterOrderListView({collection: orders}).render();
        //
        //    //var view = new mainPageView();
        //    //view.render();
        //    //view.getRegion('filter').show(filterView);
        //    //orderListView = new OrderListView({collection: orders}).render();
        //    //this.view = orderListView;
        //    //view.getRegion('orderList').show(orderListView);
        //    //view.removeRegion('orderList');
        //    //$('#ordersSection').append(view);
        //}).fail(function () {
        //    alert("A problem with loading json!");
        //});

    });
    //application.start();
    return application;
});