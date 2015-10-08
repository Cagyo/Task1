define(function(require, exports, module){
    var Marionette = require("marionette");
    var MainController = require("mainController");
    //var mocha = require("mocha");
    //var chai = require("chai");
    //var sinon = require("sinon");

    //mocha.setup("bdd");
    //window.onload = function () {
    //    mocha.run();
    //};

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
    module.exports = application;
});