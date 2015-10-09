define(function(require, exports, module){
    var Marionette = require("marionette"),
        MainController = require("mainController");

    application = new Marionette.Application();

    application.on("before:start", function(){
        var mainController = new MainController();
        mainController.start();
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

    module.exports = application;
});