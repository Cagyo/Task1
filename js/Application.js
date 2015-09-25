define(["jquery","underscore","worker","order","orders","orderView","filterView","books","orderListView"], function($,_,Worker,Order,Orders,OrderView, FilterView, Books, OrderListView){

    (function(){
        STATES = {CANCELLED: 0, INPROGRESS: 1, COMPLETED: 2};
        PAYMENTMETHODS = {CASH: 0, CASHLESS: 1};

        var filterView = new FilterView();
        $("#filter").append(filterView.el);
        filterView.setHandlers();

        var data;
        $.ajaxSetup({
            async: false
        });

        var json;
        $.getJSON("http://localhost:63342/task1/json/orders.json", data, function(result) {
            json = result;
        });

        orders = new Orders();
        for(var i =0; i<json.orders.length; i++)
        {
            var currentOrder=JSON.parse(JSON.stringify(json.orders[i]));
            currentOrder.items = new Books;
            currentOrder.id = i+1;
            currentOrder.displaySet = false;
            orders.add(currentOrder,{validate:true});
            _.forEach(json.orders[i].items,function(item){
                orders.get(i+1).addBook(item);
            });
            orders.get(i+1).orderFinished();
        }

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