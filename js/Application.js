define(function(require, exports, module){//["jquery","underscore","orders","mainView","books","mainController"], function($,_,Orders,filterOrderListView, Books, MainController) {
    var Marionette = require("marionette");
    var MainController = require("mainController");

    application = new Marionette.Application();

    application.on("before:start", function(){
        var mainController = new MainController();

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